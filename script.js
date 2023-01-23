const firstDiv = document.querySelector('.first-step');
const secondDiv = document.querySelector('.second-step');
const finalDiv = document.querySelector('.final-step');

function go(currentStep, nextStep)
{
    let dNone, dBlock;
    if(currentStep == 1)
    {
        dNone = firstDiv;
    }
    else if(currentStep == 2)
    {
        dNone = secondDiv;
    }
    else
    {
        dNone = finalDiv;
    }

    dNone.style.display = 'none';

    if(nextStep == 1)
    {
        dBlock = firstDiv;
    }
    else if(nextStep == 2)
    {
        dBlock = secondDiv;
    }
    else
    {
        dBlock = finalDiv;
    }

    dBlock.style.display = 'block';
}

function validate()
{
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    peso.style.border = 'none';
    altura.style.border = 'none';

    if(!peso.value || !altura.value)
    {
        if(!peso.value && !altura.value)
        {
            peso.style.border = '1px solid red';
            altura.style.border = '1px solid red';
        }
        else if(!peso.value)
        {
            peso.style.border = '1px solid red';
        }
        else
        {
            altura.style.border = '1px solid red';
        }
    }
    else
    {
        let imc = peso.value / (altura.value * altura.value);
        const result = document.getElementById('resultado');

        if(imc < 18.5)
        {
            console.log('Magreza | Obesidade: 0');
            result.style.color = 'yellow';
            result.innerHTML = 'Magreza | Obesidade: 0';
        }
        else if(imc >= 18.5 && imc < 25)
        {
            console.log('Normal | Obesidade: 0');
            result.style.color = 'green';
            result.innerHTML = 'Normal | Obesidade: 0'
        }
        else if(imc >= 25 && imc < 30)
        {
            console.log('Sobrepeso | Obesidade: I');
            result.style.color = 'yellow';
            result.innerHTML = 'Sobrepeso | Obesidade: I'
        }
        else if(imc >= 30 && imc < 40)
        {
            console.log('Obesidade | Obesidade: II');
            result.style.color = 'red';
            result.innerHTML = 'Obesidade | Obesidade: II'
        }
        else
        {
            console.log('Obesidade | Obesidade: III');
            result.style.color = 'black';
            result.innerHTML = 'Obesidade | Obesidade: III'
        }
        go(2,3);
    }
}