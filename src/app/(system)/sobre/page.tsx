import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const summary = `A plataforma web para prestadores de serviços de saúde se destaca como uma ferramenta crucial na era da digitalização. Ao oferecer perfis detalhados de profissionais como dentistas, psicólogos, fisioterapeutas, nutricionistas e outros especialistas, a plataforma facilita o descobrimento desses profissionais, melhorando o acesso e a comunicação entre eles e os pacientes. A funcionalidade de busca simplificada ajuda os usuários a encontrar profissionais adequados com mais facilidade, enquanto as opções de atendimento domiciliar, lembretes automáticos e um sistema de avaliações contribuem para a eficácia dos tratamentos e a reputação dos profissionais. Além disso, com um forte enfoque na segurança e privacidade dos dados, a plataforma web assegura uma gestão eficiente e protegida das informações, solidificando sua posição como uma solução inovadora e essencial na gestão.`

export default function SobrePage() {
  return (
    <div className="c-container py-16">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center text-lg">
            Resumo sobre o Projeto
          </CardTitle>
        </CardHeader>
        <Separator className="my-2" />
        <CardContent>
          <p className="text-muted-foreground text-base leading-relaxed whitespace-pre-line">
            {summary}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
