"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'
import Footer from '@/components/Footer'
import { Split } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

interface Group {
  id?: string
  name?: string
  participants?: string[]
  createdAt?: string
  [key: string]: any
}

const GroupDetailsPage = () => {
  const params = useParams()
  const id = (params?.id as string) || ''
  const [group, setGroup] = React.useState<Group | null>(null)
  const [loading, setLoading] = React.useState(true)
  const [transactions, setTransactions] = React.useState<any[]>([])
  const [balances, setBalances] = React.useState<Record<string, number>>({})
  const [showIPaid, setShowIPaid] = React.useState(false)
  const [showSomeonePaid, setShowSomeonePaid] = React.useState(false)
  const [iPaidAmount, setIPaidAmount] = React.useState('')
  const [someonePaidAmount, setSomeonePaidAmount] = React.useState('')
  const [payer, setPayer] = React.useState('')

  const persistGroup = (updated: Group) => {
    try {
      const raw = localStorage.getItem('groups')
      if (!raw) return
      const arr: Group[] = JSON.parse(raw) || []
      const idx = arr.findIndex(g => g.id === updated.id)
      if (idx !== -1) {
        arr[idx] = updated
      } else {
        // fallback index replacement if numeric id
        const numericIndex = Number(id)
        if (!Number.isNaN(numericIndex) && numericIndex >= 0 && numericIndex < arr.length) {
          arr[numericIndex] = updated
        } else {
          arr.push(updated)
        }
      }
      localStorage.setItem('groups', JSON.stringify(arr))
    } catch (e) {
      console.error('Failed to persist group', e)
    }
  }

  const recomputeBalances = (txs: any[], participants: string[] = []) => {
    const bal: Record<string, number> = {}
    participants.forEach(p => { bal[p] = 0 })
    txs.filter(t => !t.settled).forEach(t => {
      const perShare = t.perShare
      // payer receives amount - their own share (if included)
      bal[t.payer] = (bal[t.payer] || 0) + (t.amount - perShare)
      t.splitAmong.forEach((member: string) => {
        if (member === t.payer) return
        bal[member] = (bal[member] || 0) - perShare
      })
    })
    setBalances(bal)
  }

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem('groups')
      if (raw) {
        const arr: Group[] = JSON.parse(raw) || []
        // First try direct id match
        const byId = arr.find(g => g.id === id)
        if (byId) {
          setGroup(byId)
          setTransactions(byId.transactions || [])
          recomputeBalances(byId.transactions || [], byId.participants || [])
        } else {
          // Fallback: treat id as index if numeric
          const numericIndex = Number(id)
            if (!Number.isNaN(numericIndex) && numericIndex >= 0 && numericIndex < arr.length) {
              const g = arr[numericIndex]
              setGroup(g)
              setTransactions(g.transactions || [])
              recomputeBalances(g.transactions || [], g.participants || [])
            }
        }
      }
    } catch (e) {
      console.error('Failed to read group', e)
    } finally {
      setLoading(false)
    }
  }, [id])

  return (
    <div className='min-h-screen bg-background'>
      <div className='container mx-auto px-6 py-4 flex items-center justify-between'>
        <Link href='/' className='flex items-center gap-2 text-2xl font-bold'>
          <div className='w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center'>
            <Split className='w-6 h-6' />
          </div>
          <span className='text-foreground'>Splitz.</span>
        </Link>
        <ThemeToggle />
      </div>

      <main className='container mx-auto px-6 max-w-4xl pb-32'>
        <div className='mt-10 border rounded-3xl bg-card p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border-border'>
          {loading && <p className='text-muted-foreground'>Loading group...</p>}
          {!loading && !group && (
            <div className='space-y-4 text-center'>
              <p className='text-foreground font-medium'>Group not found.</p>
              <Link href='/new' className='text-sm underline text-muted-foreground hover:text-foreground'>Return to create a new one</Link>
            </div>
          )}
          {!loading && group && (
            <div className='space-y-6'>
              <h1 className='text-2xl md:text-3xl font-bold text-center'>{group.name || 'Untitled group'}</h1>
              <div className='text-center text-sm text-muted-foreground'>
                Created {group.createdAt ? new Date(group.createdAt).toLocaleString() : '—'}
              </div>
              {/* Participants section removed per request */}
              {/* Balances */}
              <section className='space-y-6'>
                <div className='space-y-2'>
                  <h2 className='text-xl font-semibold'>Balances</h2>
                  {Object.keys(balances).length === 0 && (
                    <p className='text-sm text-muted-foreground'>No balances yet.</p>
                  )}
                </div>
                {Object.keys(balances).length > 0 && (
                  <div className='bg-muted/40 rounded-xl p-4'>
                    <Bar
                      data={{
                        labels: Object.keys(balances),
                        datasets: [
                          {
                            label: 'Balance',
                            data: Object.keys(balances).map(k => Number(balances[k].toFixed(2))),
                            backgroundColor: Object.keys(balances).map(k => balances[k] >= 0 ? 'rgba(34,197,94,0.6)' : 'rgba(239,68,68,0.6)'),
                            borderColor: Object.keys(balances).map(k => balances[k] >= 0 ? 'rgba(34,197,94,1)' : 'rgba(239,68,68,1)'),
                            borderWidth: 1,
                          }
                        ]
                      }}
                      options={{
                        responsive: true,
                        plugins: {
                          legend: { display: false },
                          tooltip: {
                            callbacks: {
                              label: (ctx: any) => `${ctx.label}: ${ctx.parsed.y >= 0 ? '+' : ''}${ctx.parsed.y.toFixed(2)}`
                            }
                          }
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                            ticks: {
                              callback: (value: any) => `${value}`
                            }
                          }
                        }
                      }}
                    />
                  </div>
                )}
              </section>
              {/* Action buttons */}
              <div className='flex flex-wrap gap-4 pt-4'>
                <Button variant='default' type='button' onClick={() => { setShowIPaid(s => !s); setShowSomeonePaid(false) }}>I Paid</Button>
                <Button variant='outline' type='button' onClick={() => { setShowSomeonePaid(s => !s); setShowIPaid(false) }}>Someone Paid</Button>
              </div>
              {showIPaid && (
                <form className='mt-4 space-y-3' onSubmit={e => {
                  e.preventDefault()
                  const amount = parseFloat(iPaidAmount)
                  if (!group || !group.participants || group.participants.length === 0 || isNaN(amount) || amount <= 0) return
                  const participants = group.participants
                  const perShare = parseFloat((amount / participants.length).toFixed(2))
                  const tx = {
                    id: crypto.randomUUID(),
                    payer: participants[0], // assume first participant represents "me" for now
                    amount,
                    perShare,
                    splitAmong: participants,
                    createdAt: new Date().toISOString(),
                    settled: false
                  }
                  const newTxs = [...transactions, tx]
                  setTransactions(newTxs)
                  recomputeBalances(newTxs, participants)
                  const updated = { ...group, transactions: newTxs }
                  setGroup(updated)
                  persistGroup(updated)
                  setIPaidAmount('')
                  setShowIPaid(false)
                }}>
                  <Label htmlFor='iPaidAmount'>Total amount you paid</Label>
                  <Input id='iPaidAmount' type='number' min='0' step='0.01' value={iPaidAmount} onChange={e => setIPaidAmount(e.target.value)} placeholder='0.00' />
                  <Button type='submit' variant='destructive'>Add Transaction</Button>
                </form>
              )}
              {showSomeonePaid && (
                <form className='mt-4 space-y-3' onSubmit={e => {
                  e.preventDefault()
                  const amount = parseFloat(someonePaidAmount)
                  if (!group || !group.participants || group.participants.length === 0 || isNaN(amount) || amount <= 0 || !payer) return
                  const participants = group.participants
                  const perShare = parseFloat((amount / participants.length).toFixed(2))
                  const tx = {
                    id: crypto.randomUUID(),
                    payer,
                    amount,
                    perShare,
                    splitAmong: participants,
                    createdAt: new Date().toISOString(),
                    settled: false
                  }
                  const newTxs = [...transactions, tx]
                  setTransactions(newTxs)
                  recomputeBalances(newTxs, participants)
                  const updated = { ...group, transactions: newTxs }
                  setGroup(updated)
                  persistGroup(updated)
                  setSomeonePaidAmount('')
                  setPayer('')
                  setShowSomeonePaid(false)
                }}>
                  <Label htmlFor='payerSelect'>Who paid?</Label>
                  <select id='payerSelect' className='w-full rounded-md border px-3 py-2 bg-background' value={payer} onChange={e => setPayer(e.target.value)}>
                    <option value='' disabled>Select participant</option>
                    {group.participants?.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                  <Label htmlFor='someoneAmount'>Total amount</Label>
                  <Input id='someoneAmount' type='number' min='0' step='0.01' value={someonePaidAmount} onChange={e => setSomeonePaidAmount(e.target.value)} placeholder='0.00' />
                  <Button type='submit'>Add Transaction</Button>
                </form>
              )}
              {/* Transactions list */}
              <section className='space-y-3 pt-6'>
                <h2 className='text-xl font-semibold'>Transactions</h2>
                {transactions.length === 0 ? (
                  <p className='text-sm text-muted-foreground'>No transactions yet.</p>
                ) : (
                  <div className='space-y-3'>
                    {transactions.map(t => (
                      <div key={t.id} className='border rounded-xl p-4 flex flex-col gap-2'>
                        <div className='text-sm font-medium'>{t.payer} paid {t.amount.toFixed(2)}</div>
                        <div className='text-xs text-muted-foreground'>Split among {t.splitAmong.length} at {t.perShare.toFixed(2)} each · {t.settled ? 'Settled' : 'Unsettled'}</div>
                        {!t.settled && (
                          <Button size='sm' variant='outline' onClick={() => {
                            const newTxs = transactions.map(tx => tx.id === t.id ? { ...tx, settled: true } : tx)
                            setTransactions(newTxs)
                            recomputeBalances(newTxs, group.participants || [])
                            const updated = { ...group, transactions: newTxs }
                            setGroup(updated)
                            persistGroup(updated)
                          }}>Settle</Button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
              <div className='pt-4 flex gap-4 justify-center'>
                <Link href='/new' className='text-sm underline hover:text-foreground text-muted-foreground'>Create another group</Link>
                <Link href='/new' className='text-sm underline hover:text-foreground text-muted-foreground'>Home</Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default GroupDetailsPage
