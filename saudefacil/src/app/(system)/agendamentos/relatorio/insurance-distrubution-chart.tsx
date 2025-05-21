'use client'

import { useEffect, useState } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const COLORS = [
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#0088FE',
  '#FF6B6B',
  '#6B66FF',
]

interface TooltipProps {
  active?: boolean
  payload?: Array<{
    value: number
    name: string
  }>
}

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background rounded-lg border p-2 shadow-sm">
        <div className="flex flex-col">
          <span className="text-[10px] sm:text-xs">Total de consultas:</span>
          <span className="text-xs font-bold sm:text-sm">
            {payload[0].value.toLocaleString('pt-BR')}
          </span>
        </div>
      </div>
    )
  }
  return null
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.matchMedia('(max-width: 640px)').matches)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

export function InsuranceDistributionChart({
  data,
}: {
  data: { name: string; value: number }[]
}) {
  const isMobile = useIsMobile()

  return (
    <div className={`w-full ${isMobile ? 'h-[220px]' : 'h-[400px]'}`}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => {
              return `${name} ${(percent * 100).toFixed(0)}%`
            }}
            outerRadius={isMobile ? 80 : 150}
            fill="#8884d8"
            dataKey="value"
            fontSize={12}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
