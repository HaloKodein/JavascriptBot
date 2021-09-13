# Iniciando

Primeiro você precisa instalar os módulos usando o `yarn` ou o `npm`.

Exemplos abaixo:
___
NPM
```cmd
npm install
```
YARN
```cmd
yarn
```
Depois de instalar os módulos, renomeie o arquivo example.env para .env e preencha as chaves mencionadas.
# Padrões e Estruturas
Nos comandos normais você recebe um objeto com a mensagem os argumentos e o client.
<br><br>
**Estrutura do comando**

```js
export default {
    config: {
        name: '',
        description: '',
        aliases: []
    },
    execute: async ({ message, args, client }) => {
    }
}
```
Nos comandos slashs você recebe um objeto com a interação e o client.
<br><br>
**Estrutura de comandos em slash**
```js
export default {
    config: {
        name: '',
        description: '',
        options: []
    },
    execute: async ({ message, args, client }) => {
    }
}
```
**Estrutura dos eventos**
```js
export default {
    name: 'nomedoevento', //exemplo ready
    invoke: async (client) => {
    }
}
```
___
É sempre bom seguir um padrão em seus projetos, isso ajuda na manutenção e facilita o entendimento geral.

Nesse caso para todos os comandos normais eu boto o nome dessa maneira `NomeCommand.js` e para slashs eu boto `NomeSlash.js`, eu recomendo que siga os mesmos para não se perder.
___

# Explicando os slashs
Em um comando slash você vai se deparar com uma propiedade chamada `options` ela seria as opções que vão aparecer ao usuário usar o (/comando). Essas `options` recebe um array de objetos, contendo o nome a descrição o tipo e se ele é obrigatorio ou opcional. Tanto o nome do comando, quanto o nome da opção devem ser únicos, e você pode ter no máximo 5 opções, então use-as bem.

Na propiedade `type` das `options` existe algumas opções, elas estão listadas abaixo:

**USER** - libera a opção de mencionar uma pessoa<br>
**CHANNEL** - libera a opção de mencinoar um canal<br>
**ROLE** - libera a opção de mencionar um cargo<br>
**STRING** - libera a opção de enviar um texto<br>
**NUMBER** - libera a opção de enviar um numero<br>
**INTEGER** - libera a opção de enviar um numero inteiro 1, 2, 3, 4, 5, 6...

Exemplos abaixo:

```js
export default {
    config: {
        name: 'nomedocomando',
        description: 'Descrição do comando',
        options: [
            {
                name: 'nomedaopcao',
                description: 'Descrição da opção',
                type: 'tipodaopção',
                required: false //obrigatorio true, opcional false
            },
            {
                name: 'nomedaoutraopcao',
                description: 'Descrição da outra opção',
                type: 'tipodaoutraopção',
                required: false //obrigatorio true, opcional false
            }
        ]
    },
    execute: async ({ message, args, client }) => {
    }
}
```
<br>
Para pegar um "argumento" usando as interações é muito simples, e depende apenas do tipo da opção que você escolheu.<br>

Exemplo com a opção de **USER**:
<br>

```js
export default {
    config: {
        name: 'avatar',
        description: 'Mostra o avatar do usuario',
        options: [
            {
                name: 'usuario',
                description: 'Mencione o usuario',
                type: 'USER',
                required: true
            }
        ]
    },
    execute: async ({ interaction }) => {
        const user = interaction.options.getUser('usuario')
    }
}
```

O `getTipoDaOpcao` é uma função que recebe uma string com o nome da opção, que no caso a cima foi o `usuario` e eu utilizei o getUser porque o tipo da opção era **USER** mas se o tipo fosse CHANNEl por exemplo, seria o `getChannel` com o nome da opção. Simples, nãp? <br><br>

# Finalização
Se vocês tiverem qualquer dúvida pode me perguntar no servidor [Nerd Lab](https://discord.gg/RyC8NAYhwy) ou me chamando na DM.
