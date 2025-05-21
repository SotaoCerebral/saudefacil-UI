import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function SelectState() {
  return (
    <Select>
      <SelectTrigger className="text-foreground placeholder:text-foreground/50 w-full bg-white md:w-[180px]">
        <SelectValue placeholder="Estado" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="sao-paulo">São Paulo</SelectItem>
        <SelectItem value="rio-de-janeiro">Rio de Janeiro</SelectItem>
        <SelectItem value="minas-gerais">Minas Gerais</SelectItem>
        <SelectItem value="rio-grande-do-sul">Rio Grande do Sul</SelectItem>
        <SelectItem value="parana">Paraná</SelectItem>
        <SelectItem value="ceara">Ceará</SelectItem>
        <SelectItem value="bahia">Bahia</SelectItem>
        <SelectItem value="espirito-santo">Espírito Santo</SelectItem>
        <SelectItem value="goias">Goiás</SelectItem>
        <SelectItem value="maranhao">Maranhão</SelectItem>
        <SelectItem value="mato-grosso">Mato Grosso</SelectItem>
        <SelectItem value="mato-grosso-do-sul">Mato Grosso do Sul</SelectItem>
        <SelectItem value="distrito-federal">Distrito Federal</SelectItem>
        <SelectItem value="pernambuco">Pernambuco</SelectItem>
      </SelectContent>
    </Select>
  )
}

export { SelectState }
