// Crie um array que receba 5 itens e exiba no console.

let itens = ['Thainá',' Roberta', 'Vanessa', 'Lucas', 'Pedro'];
console.log(itens)


// Utilize um método para adicionar um nome ao inicio do array.
itens.unshift("Adriele");
console.log(itens)

// Utilize um método para remover o último nome do array.
itens.splice(5,1);
console.log(itens)


// Utilize um método para adicionar dois nomes ao fim do array.

itens.splice(5, 0, 'Bruna', 'Rodrigo');
console.log(itens)

// Utilize um método para remover o primeiro nome do array.

itens.shift(0)
console.log(itens)

// Utilize um método para organizar em ordem crescente o seguinte array:

let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort(function(a, z) {
    return (a - z)
})
console.log(numbers.sort())