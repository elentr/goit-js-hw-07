const elemCount = document.querySelectorAll('.item');
console.log(`Number of categories: ${elemCount.length}`);

elemCount.forEach((category) => {
    const ulTitle = category.querySelector('h2').textContent;
    const itemCount = category.querySelectorAll('ul > li').length;

    console.log(`Category: ${ulTitle}`);
    console.log(`Elements: ${itemCount}`);
});