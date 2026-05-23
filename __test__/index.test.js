import { describe, it, expect  } from '@jest/globals'
import Service from '../src/services/exercicios.js'

describe("Testes para Função Somar", () => {
    it("Deve somar dois numeros positivos 2 e 1, retornar 3", () => {
        const result = Service.Somar(2, 1);
        expect(result).toBe(3);
    })

        it("Deve somar dois numeros negativos -2 e -1, retornar -3", () => {
            const result = Service.Somar(-2, -1);
            expect(result).toBe(-3);
        })
        it ("Deve somar um numero positivo 2 e um numero negativo -1, retornar 1", () => {
            const result = Service.Somar(2, -1);
            expect(result).toBe(1);
        })
        it ("Ao receber um numero e uma string, deve retornar 'Informar apenas numeros'", () => {
            const result = Service.Somar(2, "a");
            expect(result).toBe("Informar apenas numeros");
        })
})

describe("Testes para Função Subtrair", () => {
    it("Deve subtrair dois numeros positivos 2 e 1, retornar 1", () => {
        const result = Service.Subtrair(2, 1);
        expect(result).toBe(1);
    })
})

describe("Testes para Função Multiplicar", () => {
    it("Deve multiplicar dois numeros positivos 2 e 1, retornar 2", () => {
        const result = Service.Multiplicar(2, 1);
        expect(result).toBe(2);
    })
})

describe("Testes para Função Dividir", () => {
    it("Deve dividir dois numeros positivos 2 e 2, retornar 1", () => {
        const result = Service.Dividir(2, 2);
        expect(result).toBe(1);
    })
})