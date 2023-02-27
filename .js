class Ejercicios{
    ejercicio1(){
        let num1,num2,suma=0
        num1=Math.floor(Math.random()*10)
        num2=Math.floor(Math.random()*10)
        if (num1>num2){
            suma=num1+num2
            console.warn(`La suma de ${num1}+${num2}= ${suma} `)
        }else{
            console.log(`El numero ${num1} es menor que el ${num2}`)
        }
    }
    ejercicio2(){
        let n1=Math.floor(Math.random()*10); let n2=Math.floor(Math.random()*10)
        let op="%"
        let ops="+"; let opr="-"; let opm="*"; let opd="/"; let oprsd="%"
        let s=0; let r=0; let m=0; let d=0; let rsd=0
        if(op=="+"){
            s=n1+n2
            console.log(`${n1} + ${n2} = ${s}`)
        }else{ 
            if(op=="-"){
                r=n1-n2
                console.log(`${n1} - ${n2} = ${r}`)
            }else{
                if(op=="*"){
                    m=n1*n2
                    console.log(`${n1} * ${n2} = ${m}`)
                }else{
                    if(op=="/"){
                        d=n1/n2
                        console.log(`${n1} / ${n2} = ${d}`)
                    }else{
                        if(op=="%")
                        rsd=n1%n2
                        console.log(`${n1} % ${n2} = ${rsd}`)
                    }
                }
            }
            
        }
    }
    ejercicio3(){
        let num1,num2
        num1=Math.floor(Math.random()*10)
        num2=Math.floor(Math.random()*10)
        if(num1>num2){
            console.log(`El numero mayor es ${num1}`)
        }else{
            console.warn(`El nuemro mayor es ${num2}`)
        }
    }
    ejercicio4(){
        let arreglo=["cucho","marcelo","alberto"]
        let longitud=Math.floor(Math.random()*arreglo.length)
            console.warn(arreglo[longitud])
    }
    ejercicio5(){
        let num1,iva=0.12,total,mul
        num1=Math.floor(Math.random()*10)
        mul=num1*iva
        total=mul+num1
        console.warn(`El precio es ${num1} mas el IVA el total a pagar es ${total}`)
    }
    ejercicio6(){
        let arreglo=["cucho","marcelo","alberto","romero"]
        let longitud=Math.floor(Math.random()*arreglo.length),i=0
            for(i;i<5;i++){
            console.warn(arreglo[longitud])
        }
    }
    ejercicio7(){
        let i=0
        for(i=3;i<=21;i=i+3){
            console.log(i)
        }
    }
    ejercicio8(){
        let i=0
        for(i=21;i>=3;i=i-3){
            console.log(i)
        }
    }
    ejercicio9(){
        let arreglo=["cucho","marcelo","alberto"]
        let longitud=Math.floor(Math.random()*arreglo.length)
        let longitud1=Math.floor(Math.random()*arreglo.length)
        if(arreglo[longitud] == arreglo[longitud1]){
            console.log(`los nombres ${arreglo[longitud]} y ${arreglo[longitud1]} son iguales`)
        }else{
            console.warn(`los nombres ${arreglo[longitud]} y ${arreglo[longitud1]} no son iguales`)
        }
    }
    ejercicio10(){
        let arreglo=[54545,888,45445]
        let longitud=arreglo.length,i=0
        while(i<longitud){
            if(arreglo[i].toString().length < 5){
                console.log(`Los dijitos menores a 5 caracteres es ${arreglo[i]}`)
            }
            i=i+1
        }
    }
    ejercicio11(){
        let arreglo=[54545,888,45445],i=0
        let longitud=arreglo.length
        console.log(`Los dijitos del arreglo son:`)
        while(i< longitud){
            console.log(`${arreglo[i]}`)
            i=i+1
        }
    }
    ejercicio12(){
        let arreglo=[11,9,4,13,10]
        let longitud=arreglo.length,i=0
        console.warn(`Los numeros menores a 10 son`)
        while(i<longitud){
            if(arreglo[i]<10){
                console.log(arreglo[i])
            }
            i=i+1
        }
    }
    ejercicio13(){
        let arreglo=[5,4,6,3,2,8,9]
        let longitud=arreglo.length,i=0,suma=0
        console.log(`Los numeros impares son `)
        while(i<longitud){
            if(arreglo[i]% 2 != 0){
                console.log(arreglo[i])
            }else{
                suma=suma+arreglo[i]
            }
            i=i+1
        }
        console.warn(`la suma de los numeros pares es= ${suma}`)
    }
    ejercicio14(){
        let arreglo=[5,4,6,3,2,8,9]
        let longitud=arreglo.length,i=0,me
        me=Math.floor(longitud/2)
        console.warn(`El primer valor del arreglo es ${arreglo[0]} `)
        console.warn(`El valor de la mitad del arreglo es ${arreglo[me]}`)
        console.warn(`El ultimo valor del arreglo ${arreglo[longitud-1]} `)
    }
    ejercicio15(){
        let vuelto=0,costo,pago
        pago=Math.floor(Math.random()*20)
        costo=Math.floor(Math.random()*10)
        vuelto=pago-costo
        console.log(`El total a pagar es ${costo} pagas con ${pago} tu vuelto es de ${vuelto}`)
    }
    ejercicio16(){
        let num1,c=1,mul=0,limite=12
        num1= Math.floor(Math.random()*10)
        console.warn(`La tabla de multiplicar de ${num1}`)
        while(c<=12){
            mul=num1*c
            console.log(`${num1}*${c}= ${mul}`)
            c=c+1
        }
    }
    ejercicio17(){
        let num1=5,num2=3,suma=0,c=0,suma1=0
        while(c<num2){
            suma=suma+num1
            c=c+1
            console.warn(num1 + "+"+suma1+"="+suma )
            suma1=suma1+num1
        }
        console.log(`La multiplicación de ${num1}*${num2}=`);console.warn(suma)
    }
    ejercicio18(){
        let num1,num2,reciduo=0,cociente=0
        num1=Math.floor(Math.random()*10)
        num2=Math.floor(Math.random()*5)
        let i=num1
        while(i>=num2){
            i-=num2
            cociente++
        }
        reciduo=i
        console.warn(`La divicion ${num1}/${num2}=${cociente}`)
        console.log(`El cociente es ${cociente} y el reciduo es ${reciduo}`)
    }
    ejercicio19(){
        let num2=4,fac=1,c=1
        while(c<=num2){
            fac*=c
            c++
        }
        console.log(fac)
    }
    ejercicio20(){
        let num1,exp
        num1=Math.floor(Math.random()*10)
        exp=Math.floor(Math.random()*10)
        let mul=1,c=0
        while(c<exp){
            mul*=num1
            c++
        }
        console.log(`El numero ${num1} con exponente ${exp} = ${mul}`)
    }
    ejercicio21(){
        let num1,c=2
        num1=8 //Math.floor(Math.random()*10)
        let numero=[0,1]
        while(c<num1){
            numero[c]=numero[c-1]+numero[c-2]
            console.warn(numero[c])
            c++
        }
    }
    ejercicio22(){
        let num1=123456,d
        while(num1>0){
            d=num1%10
            console.log(d)
            num1=Math.floor(num1/10)
        }
    }
    ejercicio23(){
        let num1,c=1
        num1= 5 //Math.floor(Math.random()*10)+1
        console.log(`Los divisores del numero ${num1} son:`)
        while(c<=num1){
            if(num1%c===0){
                console.warn(c)
            }
            c++
        }
    }
    ejercicio24(){ 
        let num1,c=1,d=0
        num1= 26 //Math.floor(Math.random()*10)+1
        console.log(`El nuemero ${num1} es:`)
        while(c<num1){
            if(num1%c===0){
                d+=c
            }
            c++
        }
        if(d===num1){
            console.warn(`Primo`)
        }else{
            console.warn(`No es Primo`)
        }
    }
    ejercicio25(){
        let num1,c=1,d=0
        num1=6 //Math.floor(Math.random()*20)+1
        if(num1<=1){
            console.log(`El numero ${num1} no tiene numero primo`)
        }else{
            while(c<num1){
                if(num1%c===0){
                    d++
                }
                c++
            }
            if(d<=2){
                console.warn(`El numero ${num1} es primo `)
            }else{
                console.log(`El numero ${num1} no es primo`)
            }
        }
    }
}

let Ejercicio=new Ejercicios()
Ejercicio.ejercicio11()

