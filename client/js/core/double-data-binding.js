//var object = ;
/* console.log(object);
 object.addEventListener("change", function () {

 console.log('it works');
 });
 */
document.getElementById('input').addEventListener("keyup", function () {

    console.log(this.value);

    document.querySelector('.output').innerText = this.value;

});

/**
 *
 * http://codepen.io/yichenzhu1337/pen/gLNeBO?editors=1111
 *
 * HTML
 * -------------
 <input type="text" id="input">
 <div class="output"></div>
 */