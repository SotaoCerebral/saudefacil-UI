import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function SelectSpecialist() {
  return (
    <Select>
      <SelectTrigger className="text-foreground placeholder:text-foreground/50 w-full bg-white md:w-[180px]">
        <SelectValue placeholder="Especialidade" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="clinico-geral">Clinico Geral</SelectItem>
        <SelectItem value="pediatria">Pediatria</SelectItem>
        <SelectItem value="ginecologia-e-obstetricia">
          Ginecologia e Obstetrícia
        </SelectItem>
        <SelectItem value="psiquiatria">Psiquiatria</SelectItem>
        <SelectItem value="ortopedia">Ortopedia</SelectItem>
        <SelectItem value="cardiologia">Cardiologia</SelectItem>
        <SelectItem value="dermatologia">Dermatologia</SelectItem>
        <SelectItem value="endocrinologia">Endocrinologia</SelectItem>
      </SelectContent>
    </Select>
  )
}

export { SelectSpecialist }
