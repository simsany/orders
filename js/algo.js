/*
Összegzés algoritmus: 

összeg = 0 
ciklus amíg van még szám, addig 
    szám = következő elemmel 
    összeg = összeg + szám 
ciklus vége 
*/ 
let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];
let sum = 0;
for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
    }
console.log("sum: ", sum)




/*
Számlálás algoritmusa: 

db = 0 
Ciklus amíg van még szám, addig 
    szám = a következő elem
    ha igaz a feltétel a számra, akkor 
    db = db + 1 
    Feltétel vége 
Ciklus vége 
*/ 
let db = 0; 
for(let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 == 0) {
        db++;
    }
}
console.log("Even numbers: ", db); 

/*
Szélsőérték keresés algoritmusa: 

legnagyobb = első elem 
CIKLUS AMíG  van még szám, ADDIG 
    szám = következő szám 
    HA szám > legnagyobb, AKKOR  
        legnagyobb = szám 
    FELTÉTEL VÉGE 
CIKLUS VÉGE 
*/ 

/* 
let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
            if (numericArray[i] > biggest) {
            biggest = numericArray[i];
        }
}
console.log("The biggest element: ", biggest);

let smallest = numericArray[0];
for (let i = 0; i > numericArray.length; i++) {
            if (numericArray[i] > smallest) {
            smallest = numericArray[i];
        }
}
console.log("The smallest element: ", smallest);
Eldöntés tétele (algoritmusa): 

találat = HAMIS 
CIKLUS AMíG van elem ÉS NEM találat 
    szám = kövtekző elem 
    HA igaz a feltétel a számra, AKKOR 
        találat = IGAZ 
    FELTÉTEL VÉGE 
CIKLUS VÉGE 
*/
let contains = false; 
for (let i = 0; i < numericArray.length && !contains == false; i++) {
    if (numericArray[i] == 5) {
        contains = true;
    }
}
console.log("This arrey contains 5: ", contains);



/*
Kávéfőző bekapcsolása 
if nincs elég kávé then 
kávé hozzáadása 
endif 
if nincs elég víz then 
víz hozzáadása 
endif 
while nem melegedett fel 
10 mp várakozás 
endwhile
csésze odhelyezése 
gomb megnyomása
*/