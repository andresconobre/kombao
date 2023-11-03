import { ref } from "vue";

const pages = ref<string[]>([
  'membros', 
  'galeria',
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

export {
    pages,
    frases
}