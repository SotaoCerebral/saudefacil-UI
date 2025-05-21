import React from 'react'

interface Noticia {
  id: number
  titulo: string
  resumo: string
  imagem: string
  data: string
  link: string
}

const noticias: Noticia[] = [
  {
    id: 1,
    titulo: 'Pesquisadores testam vacina contra Alzheimer',
    resumo: 'Estudo clínico com vacina experimental mostra bons resultados na prevenção da doença.',
    imagem: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=1280&q=80',
    data: '2025-05-19',
    link: 'https://www.uol.com.br/vivabem/noticias/redacao/2025/05/19/teste-vacina-alzheimer.htm',
  },
  {
    id: 2,
    titulo: 'Ministério da Saúde lança campanha de vacinação contra gripe',
    resumo: 'Imunização gratuita está disponível em postos de saúde para grupos prioritários.',
    imagem: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1280&q=80',
    data: '2025-05-18',
    link: 'https://g1.globo.com/saude/noticia/2025/05/18/campanha-vacinacao-gripe.htm',
  },
  {
    id: 3,
    titulo: 'Avanço na cirurgia robótica no Brasil',
    resumo: 'Tecnologia reduz tempo de internação e melhora recuperação de pacientes.',
    imagem: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1280&q=80',
    data: '2025-05-17',
    link: 'https://www1.folha.uol.com.br/equilibrioesaude/2025/05/cirurgia-robotica.htm',
  },
  {
    id: 4,
    titulo: 'Nova diretriz de alimentação saudável é publicada',
    resumo: 'OMS divulga orientações revisadas sobre dietas equilibradas e riscos do açúcar.',
    imagem: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1280&q=80',
    data: '2025-05-16',
    link: 'https://www.who.int/news-room/detail/2025/05/16/healthy-eating-guidelines',
  },
  {
    id: 5,
    titulo: 'Exercícios reduzem em 30% riscos de doenças cardíacas',
    resumo: 'Estudo mostra que caminhadas diárias ajudam a manter o coração saudável.',
    imagem: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1280&q=80',
    data: '2025-05-15',
    link: 'https://www.heart.org/en/news/2025/05/15/exercise-and-heart-health',
  },
  {
    id: 6,
    titulo: 'Saúde mental ganha espaço no SUS',
    resumo: 'Governo anuncia ampliação do atendimento psicológico em unidades básicas.',
    imagem: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1280&q=80',
    data: '2025-05-14',
    link: 'https://www.gov.br/saude/pt-br/noticias/2025/05/saude-mental-no-sus',
  },
]


export function Noticias() {
  return (
    <section className="p-6 bg-white rounded-xl shadow-lg max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-primary text-center">Últimas Notícias de Saúde</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {noticias.map((noticia) => (
          <div key={noticia.id} className="bg-gray-50 rounded-xl shadow hover:shadow-md transition-all">
            <img
              src={noticia.imagem}
              alt={noticia.titulo}
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-primary">{noticia.titulo}</h3>
              <p className="text-sm text-gray-500">{new Date(noticia.data).toLocaleDateString()}</p>
              <p className="text-gray-700 text-sm">{noticia.resumo}</p>
              <a
                href={noticia.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600 hover:underline text-sm"
              >
                Leia mais →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
