import { reactive, ref } from "vue";

interface Membro {
  nome: string
  lowername: string
  tags: string[]
  cor?: string
}

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

const membros: Membro[] = reactive([
  {
    nome: 'André',
    lowername: 'andre',
    tags: ['Babaquinha', 'Sulista', 'Garoto de programa']
  },
  {
    nome: 'Luquinha',
    lowername: 'luquinhas',
    tags: ['Smol', 'Sulista', 'Lolzeiro', 'MTG']
  },
  {
    nome: 'Salache',
    lowername: 'salache',
    tags: ['Dermografista', 'Sulista', 'MTG']
  },
  {
    nome: 'Ņ̷̨̛̠̼͎̯͎̙̝͙̗͉̞̤͉͎̜̻̙͈̝̼͂̔͐̃͑́̂̌͗̌̿̋̈́̊͒̎̇̚̚̕͠͝͠͠ͅͅI̷̧̡̛̟͇͓̯̝̰̪͈̖̙̖͓̮̗̟̼͓͚̳͎͕̻̗͎͈̗̜̱̦̤̖͓̬̰̖̱̩͓̪͔͈̽̔̆͌̐͒̀̀̌̓̃̓͑̓̾͑̅̒͐̃́͋̑̐̄͑̊̈́͆́̽͗́̽̆̄̓̉͐͜͜͜͜͜͠͠ͅC̴̡̡̧̧͔̳̥̬̙̦̼͖̠̹͇̠̱̗͉̫̖͕͎̝̘̦̮͚̠̣͉̺̰̭̭͖̲̗̬̟̳̳̪̤̄̊̔̏̊̒̿͜͜Ơ̶̧̢̧̜͓͍̭̙̘̯͇͓̺̜̮̼͈̜͖͉͕̪̻̰͉̗̘̖͉̦̠̪͉̞͍̘͔̯͕̳̗͛́̔̈́̑̑̈̿͂̔̔͗̊̾̅̀̃̓̓̽̏̄͆̓̏̀̌͊͑̾̏̅̍͗͑̍̾͗͌̆̀̓͘͜͠ͅĻ̸̢̢̡̡̡̨̢̛̯͙͉͇̦̩̹͖͇̫͔̜̲̩̯̰̳͕͈̣̥͇̬̺̬͖̣͍̰̻̖̭̪̰͇͔̐͛́̽̈͗͐̑͂͒̄͆̇̊̂͊̈́̽̆̎̈̾͛̌̽̈́̓̋͑͂̍̊̎́̓̇͐̕͘̕̕͘͜͜͝͠͝Ą̶̧̢̝̖̙̤̭̣̖̤̦̤̯͖͉͙͚̀̑̊̔̌̏͑̉̐̍̈́͒͑͐̀͒͆͑̅͛̆̈́̉͊͋͆͊̋̕͘͝S̷̯̖̣̦͔͉̰̾',
    lowername: 'nicolas',
    tags: ['Uruguaio', 'Sulista', 'Gato']
  },
  {
    nome: 'Felibuda',
    lowername: 'felibuda',
    tags: ['Açougueiro', 'Sulista', 'Gado']
  },
  {
    nome: 'Ribeiro',
    lowername: 'ribeiro',
    tags: ['LGBT', 'Sulista', 'Lolzeira', 'Narguileira']
  },
  {
    nome: 'Helena',
    lowername: 'helena',
    tags: ['Louca', 'Paulista', 'Lolzeira']
  },
  {
    nome: 'Laroca',
    lowername: 'laroca',
    tags: ['Canhoto', 'Sulista', 'Desempregado']
  },
  {
    nome: 'Kadidja',
    lowername: 'kadidja',
    tags: ['Baiana', 'Lolzeira', 'Professora']
  },
  {
    nome: 'Rafael',
    lowername: 'rafael',
    tags: ['Baianista', 'Sulista', 'Lolzeiro', 'Professor']
  },
])

export {
    pages,
    frases,
    membros
}