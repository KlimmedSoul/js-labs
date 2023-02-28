function agePeople(Age) {
    let yearsOld;

    Age >= 1 && Age <= 17 ? yearsOld = 'Ребенок' : yearsOld = yearsOld;
    Age >= 18 && Age <= 30 ? yearsOld = 'Молодой' : yearsOld = yearsOld;
    Age >= 30 && Age <= 55 ? yearsOld = 'Зрелый' : yearsOld = yearsOld;
    Age >= 55 ? yearsOld = 'Старый' : yearsOld = yearsOld;

    return yearsOld;
}

for (i = 0; i < 100; i++) {
    console.log(agePeople(i))
}