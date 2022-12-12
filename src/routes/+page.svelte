<svelte:head>
	<title>romaric tekem</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
</svelte:head>





<style>
body, h1,h2,h3,h4,h5,h6 {font-family: "Montserrat", sans-serif}
.w3-row-padding img {margin-bottom: 12px}
/* Set the width of the sidebar to 120px */
.w3-sidebar {width: 100px;background: #222;}
/* Add a left margin to the "page content" that matches the width of the sidebar (120px) */
#main {margin-left: 120px}
/* Remove margins from "page content" on small screens */
@media only screen and (max-width: 600px) {#main {margin-left: 0}}
</style>


<script>
  import { onMount } from 'svelte'
	import { supabase } from '$lib/supabaseClient'
  let contact = undefined
	onMount(async () => {
		const { data, error } = await supabase
      .from('contact')
			.select('Name')
			
		contact = data
	})
</script>





<!-- First Grid: Logo & About -->
<div class="w3-row">
  <div class="w3-half w3-black w3-container w3-center" style="height:700px">
    <div class="w3-padding-64">
      <h1>{contact?.Name}</h1>
    </div>
    <div class="w3-padding-64">
      <a href="/" class="w3-button w3-black w3-block w3-hover-blue-grey w3-padding-16">Home</a>
      <a href="/work" class="w3-button w3-black w3-block w3-hover-teal w3-padding-16">My Work</a>
      <a href="/resume" class="w3-button w3-black w3-block w3-hover-dark-grey w3-padding-16">resume</a>
      <a href="/dashboard" class="w3-button w3-black w3-block w3-hover-dark-grey w3-padding-16">sample Dashboard</a>
      <a href="#contact" class="w3-button w3-black w3-block w3-hover-brown w3-padding-16">Contact</a>
    </div>
  </div>
  <div class="w3-half w3-blue-grey w3-container" style="height:700px">
    <div class="w3-padding-64 w3-center">
      <h1>About Me</h1>
      <img src="https://frvmswtytsjhuovvwjqt.supabase.co/storage/v1/object/sign/devweb.project/person.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZ3ZWIucHJvamVjdC9wZXJzb24uanBnIiwiaWF0IjoxNjY4OTY1NDIxLCJleHAiOjE5ODQzMjU0MjF9.fbFZmrSZW5umnWhj-FNkADXSznXOEC27dqesIzR5iMY" class="w3-margin w3-circle" alt="Person" style="width:50%">
      <div class="w3-left-align w3-padding-large">
        <p>Eleve ingenieur en genie des systemes industrielle en dominante  industrie 4.0.</p>
        <p>Le caractere transversale de cette dominante me permet d'exercer dans tous les secteurs d'activités:
          secteurs industriels(smart factory) de l'aeronautique a l'agro-alimentaire,services aux entreprises 
        </p>
      </div>
    </div>
  </div>
</div>

<!-- Second Grid: Work & Resume -->
<div class="w3-row">
  <div class="w3-half w3-light-grey w3-center" style="min-height:800px" id="work">
    <div class="w3-padding-64">
      <h2>My Work</h2>
      <p>Some of my latest projects.</p>
    </div>
    <div class="w3-row">
      <div class="w3-half">
        <img src="https://frvmswtytsjhuovvwjqt.supabase.co/storage/v1/object/sign/devweb.project/digital.PNG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZ3ZWIucHJvamVjdC9kaWdpdGFsLlBORyIsImlhdCI6MTY2ODk2NDI1NCwiZXhwIjoxOTg0MzI0MjU0fQ.TERZTc4Z-fHWb72TZKOZK0KJMIdLLFS6eq7GQIgl8cQ" style="width:100%">
      </div>
      <div class="w3-half">
        <img src="https://frvmswtytsjhuovvwjqt.supabase.co/storage/v1/object/sign/devweb.project/demand%20planner.PNG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZ3ZWIucHJvamVjdC9kZW1hbmQgcGxhbm5lci5QTkciLCJpYXQiOjE2Njg5NjQwNjcsImV4cCI6MTk4NDMyNDA2N30.DvesLYKuSVSSV3M7y8OtXN5vJqV3ifs7ZzPajM7JfMU" style="width:100%">
      </div>
    </div>
    <div class="w3-row w3-hide-small">
      <div class="w3-half">
        <img src="https://frvmswtytsjhuovvwjqt.supabase.co/storage/v1/object/sign/devweb.project/lean.PNG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZ3ZWIucHJvamVjdC9sZWFuLlBORyIsImlhdCI6MTY2ODk2NDEwMiwiZXhwIjoxOTg0MzI0MTAyfQ.ZwmxeMjYoc0p_rZnD-H0YXcI-ClGl1KZjlXUlnHtF9U" style="width:100%">
      </div>
      <div class="w3-half">
        <img src="https://frvmswtytsjhuovvwjqt.supabase.co/storage/v1/object/sign/devweb.project/supply%20chain.PNG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZ3ZWIucHJvamVjdC9zdXBwbHkgY2hhaW4uUE5HIiwiaWF0IjoxNjY4OTY0MTMwLCJleHAiOjE5ODQzMjQxMzB9.jdYWv27d92WL8YkQf_s-26qr068wL0GSwRTMD46Dw9c" style="width:100%">
      </div>
    </div>

    <div class="w3-row w3-hide-small">
      <div class="w3-half">
        <img src="https://frvmswtytsjhuovvwjqt.supabase.co/storage/v1/object/sign/devweb.project/ia.PNG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZ3ZWIucHJvamVjdC9pYS5QTkciLCJpYXQiOjE2Njg5NjQyMTgsImV4cCI6MTk4NDMyNDIxOH0.QRsg7VeU3zGrG79ubNklyPJGk9dn_MTuk53-CjJZENM&t=2022-11-20T17%3A10%3A18.870Z" style="width:100%">
      </div>
      <div class="w3-half">
        <img src="https://frvmswtytsjhuovvwjqt.supabase.co/storage/v1/object/sign/devweb.project/big%20data.PNG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZ3ZWIucHJvamVjdC9iaWcgZGF0YS5QTkciLCJpYXQiOjE2Njg5NjM2OTUsImV4cCI6MTk4NDMyMzY5NX0.zhaQV-99A_dF43ysTe2klyb5avlcT5XtcfUhpgtV-Oc" style="width:100%">
      </div>
    </div><br>
    <p>Just call me awesome.</p>
  </div>
  <div class="w3-half w3-indigo w3-container" style="min-height:800px">
    <div class="w3-padding-64 w3-center">
      <h2>Resume</h2>
      <p>A draft from my CV</p>
      <div class="w3-container w3-responsive">
        <table class="w3-table">
          <tbody><tr>
            <th>Year</th>
            <th>Title</th>
            <th>Where</th>
          </tr>
          <tr class="w3-white">
            <td>2021-2023</td>
            <td>Eleve ingenieur a l'EIGSI</td>
            <td>La Rochelle,France</td>
          </tr>
          <tr>
            <td>2020-2021</td>
            <td>Business English</td>
            <td>Casablanca,Maroc</td>
          </tr>
          <tr class="w3-white">
            <td>2018-2021</td>
            <td>Eleve ingenieur a l'EIGSI</td>
            <td>Casablanca, Maroc</td>
          </tr>
          <tr>
            <td>2017-2018</td>
            <td>Niveau 1 en licence Physique</td>
            <td>Université de Yaoundé 1, Cameroun</td>
          </tr>
          <tr class="w3-white">
            <td>2016-2017</td>
            <td>Baccalaureat en Mathematique</td>
            <td>College saint thomas d'aquin,Bafoussam</td>
          </tr>
          <tr class="w3-hide-medium">
            <td>2002-2005</td>
            <td>Degree in Bachelor of Business</td>
            <td>RMIT University, Melbourne, Australia</td>
          </tr>
        </tbody></table>
      </div>
    </div>
  </div>
</div>

<!-- Third Grid: Swing By & Contact -->
<div class="w3-row" id="contact">
  <div class="w3-half w3-dark-grey w3-container w3-center" style="height:700px">
    <div class="w3-padding-64">
      <h1>Cordonnées</h1>
    </div>
    <div class="w3-padding-64">
      <p>..for a cup of coffee, or whatever.</p>
      <p>La Rochelle , France</p>
      <p>+33(0)758852712</p>
      <p>r.tekem.23@eigsi.fr</p>
    </div>
  </div>
  <div class="w3-half w3-teal w3-container" style="height:700px">
    <div class="w3-padding-64 w3-padding-large">
      <h1>Contact</h1>
      <p class="w3-opacity">GET IN TOUCH</p>
      <form class="w3-container w3-card w3-padding-32 w3-white" action="/action_page.php" target="_blank">
        <div class="w3-section">
          <label>Name</label>
          <input class="w3-input" style="width:100%;" type="text" required="" name="Name">
        </div>
        <div class="w3-section">
          <label>Email</label>
          <input class="w3-input" style="width:100%;" type="text" required="" name="Email">
        </div>
        <div class="w3-section">
          <label>Message</label>
          <input class="w3-input" style="width:100%;" type="text" required="" name="Message">
        </div>
        <button type="submit" class="w3-button w3-teal w3-right">Send</button>
      </form>
    </div>
  </div>
</div>