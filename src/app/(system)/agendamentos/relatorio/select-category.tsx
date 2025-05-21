import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function SelectCategory() {
  return (
    <Select defaultValue="consulta">
      <SelectTrigger className="w-full sm:w-[180px]">
        <SelectValue placeholder="Tipo de Atendimento" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="consulta">Consulta</SelectItem>
        <SelectItem value="exame">Exame</SelectItem>
      </SelectContent>
    </Select>
  )
}

export { SelectCategory }
