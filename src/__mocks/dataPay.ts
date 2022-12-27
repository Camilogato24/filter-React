import { Pay } from "../interfaces/filterContextvalue";

export const dataMock: Pay[] = [
    {
        id: 2345,
        transaction: 'Cobro exitoso',
        date: '12/26/2022',
        payMethod: '**** **** **** 7889',
        transactionId: 'GFGHGFHFG6565',
        amount: 25000,
        deductionBold: 1500,
        isCobroDatafono: true,
        isCobroLink: false,
    },
    {
        id: 3356,
        transaction: 'Cobro exitoso',
        date: '12/07/2022',
        payMethod: '**** **** **** 7889',
        transactionId: 'GFGHGFHFG6545',
        amount: 15000,
        deductionBold: 1200,
        isCobroDatafono: false,
        isCobroLink: false,
    },
    {
        id: 9545,
        transaction: 'Cobro no realizado',
        date: '12/31/2022',
        payMethod: '**** **** **** 7889',
        transactionId: 'GFGHGFHFG6566',
        amount: 45000,
        deductionBold: 2500,
        isCobroDatafono: false,
        isCobroLink: true,
    },
    {
        id: 2299,
        transaction: 'Cobro no realizado',
        date: '11/20/2022',
        payMethod: '**** **** **** 7889',
        transactionId: 'GFGHGFHFG6566',
        amount: 45000,
        deductionBold: 2500,
        isCobroDatafono: false,
        isCobroLink: true,
    }
]