function trocar(a, b, c) {
    if (document.querySelector('button').classList.contains('preto')) {
        document.querySelector('button').classList.remove('preto')
        document.querySelector('button').classList.add('verde')
        document.querySelector('button').innerHTML = "verde"
    } else {
        document.querySelector('button').classList.remove('verde')
        document.querySelector('button').classList.add('preto')
        document.querySelector('button').innerHTML = "preto"
    }
}