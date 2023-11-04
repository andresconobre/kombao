import { reactive, ref } from "vue";

interface Membro {
  nome: string
  lowername: string
  tags: string[]
  cor?: string
  fotos?: number
}

const pages = ref<string[]>([
  'membros', 
  'galeria',
  'videos'
])

const frases = ref<string[]>([
  'Academia é um lugar para dois tipos de pessoas: os que não precisam e os que não têm mais jeito',
  'Phantom 👽',
  'Close hands 🤝',
  'Ai que saudade da minha ex',
  'O Nicolas é a Arca de Noé da gastronomia: já comeu dois de cada.',
  'Sanduíche de oggs',
  'Deus é maravilhoso',
  'Budansly?',
  'Horas iguais',
  'Mapinha novo de Terraria?',
  '100zinho no Keydrop?',
  'bd',
  'Ué',
  'Quem perdoa é município',
  'Bagaçou'
])

const membros: Membro[] = reactive([
  {
    nome: 'André',
    lowername: 'andre',
    tags: ['Babaquinha', 'Sulista', 'Dev'],
    fotos: 11
  },
  {
    nome: 'Luquinha',
    lowername: 'luquinhas',
    tags: ['Smol', 'Sulista', 'Lolzeiro', 'MTG'],
    fotos: 7
  },
  {
    nome: 'Salache',
    lowername: 'salache',
    tags: ['Dermografista', 'Sulista', 'MTG'],
    fotos: 9
  },
  {
    nome: 'Nicolas',
    lowername: 'nicolas',
    tags: ['Uruguaio', 'Sulista', 'Gato'],
    fotos: 8
  },
  {
    nome: 'Felibuda',
    lowername: 'felibuda',
    tags: ['Açougueiro', 'Sulista', 'Gado'],
    fotos: 6
  },
  {
    nome: 'Ribeiro',
    lowername: 'ribeiro',
    tags: ['LGBT', 'Sulista', 'Lolzeira', 'Narguileira'],
    fotos: 8
  },
  {
    nome: 'Helena',
    lowername: 'helena',
    tags: ['Louca', 'Paulista', 'Lolzeira'],
    fotos: 8
  },
  {
    nome: 'Laroca',
    lowername: 'laroca',
    tags: ['Canhoto', 'Sulista', 'Desempregado'],
    fotos: 14
  },
  {
    nome: 'Mario',
    lowername: 'mario',
    tags: ['Maromba', 'Paulista', 'Lolzeiro'],
    fotos: 8
  },
  {
    nome: 'Kadidja',
    lowername: 'kadidja',
    tags: ['Baiana', 'Lolzeira', 'Professora'],
    fotos: 14
  },
  {
    nome: 'Rafael',
    lowername: 'rafael',
    tags: ['Baianista', 'Sulista', 'Lolzeiro', 'Professor'],
    fotos: 10
  },
])

export {
    pages,
    frases,
    membros
}