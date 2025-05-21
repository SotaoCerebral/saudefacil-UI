import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function SelectInsurance() {
  return (
    <Select defaultValue="bradesco">
      <SelectTrigger className="w-full sm:w-[180px]">
        <SelectValue placeholder="Plano de Saúde" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="unimed">Unimed</SelectItem>
        <SelectItem value="amil">Amil</SelectItem>
        <SelectItem value="bradesco">Bradesco</SelectItem>
      </SelectContent>
    </Select>
  )
}

export { SelectInsurance }
