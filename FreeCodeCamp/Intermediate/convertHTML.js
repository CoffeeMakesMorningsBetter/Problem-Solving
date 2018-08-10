/*
Convert the characters &, <, >, " (double quote), and ' 
(apostrophe), in a string to their corresponding HTML entities.
*/ 

function convertHTML(str) {
  let map ={
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '\"':'&quot;',
        '\'':"&apos;"
      };
  let arr = str.split("")
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] in map){
      arr[i] = map[arr[i]]
    }
  }
  return arr.join("")
}

convertHTML("Dolce & Gabbana") //should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") //should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") //should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') //should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Schindler's List") //should return Schindler&​apos;s List.
convertHTML("<>") //should return &​lt;&​gt;.
convertHTML("abc") //should return abc.