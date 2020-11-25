# Enunciado

Construa, utilizando HTML, CSS e JavaScript puro, uma aplicação para mostrar números por extenso.

## Atividades

Os alunos deverão desempenhar as seguintes atividades:

 1. Implementar, através de HTML, CSS e JavaScript puro, uma aplicação
    que deve, a partir de um número definido pelo usuário (entre 0 e
    999, inclusive), mostrar como é a descrição do número, ou seja, o
    número por extenso.

 2. A aplicação deve conter 3 inputs.

	 1. O primeiro input deve ser do tipo range e permitir a mudança de valores entre 0 e 999 (inclusive).

	 2. O segundo input deve ser textual, desabilitado e somente-leitura. Este input deve mostrar o número selecionado do range em formato numérico.

	 3. O terceiro input deve ser textual, desabilitado e somente-leitura. Este input deve mostrar o número selecionado do range em formato por extenso.

 3. A imagem abaixo ilustra uma possível interface para a aplicação.
 ![example](https://user-images.githubusercontent.com/39639652/100278723-1a45dd80-2f44-11eb-98f7-ddec0d745767.png)


## Dicas

 1. Utilize o método load de window.addEventListener para garantir que o DOM esteja totalmente carregado antes de qualquer instrução JavaScript. Como uma alternativa mais declarativa, pesquise e veja como utilizar o atributo defer na tag

 2. Utilize id's nos inputs para mapeá-los no script com document.querySelector

 3. Utilize o evento input para mapear a mudança de valores no input do tipo range.

 4. Crie funções para tratar números com 1, 2 e 3 caracteres. Faça reuso dessas funções.

 5. Não se preocupe tanto com a interface gráfica. O mais importante é o código estar funcionando. Se quiser implementar como na imagem acima, utilize o Materialize CSS.

 6. Saia da zona de conforto e pense fora caixa!

# Resultado

![screen](https://user-images.githubusercontent.com/39639652/100278189-3b59fe80-2f43-11eb-8181-e4e33acc60e7.png)
