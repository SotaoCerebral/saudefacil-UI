'use client'

import { Card } from '@/components/ui/card'
import { DatePicker } from '@/components/ui/date-picker'

import { InsuranceDistributionChart } from './insurance-distrubution-chart'
import { SelectCategory } from './select-category'
import { SelectInsurance } from './select-insurance'

const mockData = [
  { name: 'Unimed', value: 245 },
  { name: 'Amil', value: 180 },
  { name: 'SulAmérica', value: 120 },
  { name: 'Bradesco Saúde', value: 95 },
  { name: 'NotreDame', value: 75 },
  { name: 'Outros', value: 45 },
]

export default function Relatorio() {
  return (
    <main className="c-container py-16">
      <h1 className="mb-6 text-xl font-semibold">
        Relatório sobre as consultas
      </h1>
      <Card className="flex flex-col gap-8 rounded-2xl border p-8">
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <DatePicker />
          <SelectCategory />
          <SelectInsurance />
        </div>
        <InsuranceDistributionChart data={mockData} />
      </Card>
    </main>
  )
}
