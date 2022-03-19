
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre> 
__________.___ ____  __.___________           __________________________________   _________________________ 
\______   \   |    |/ _|\_   _____/          /   _____/\_   _____/\______   \   \ /   /\_   _____/\______   \
 |     ___/   |      <   |    __)_   ______  \_____  \  |    __)_  |       _/\   Y   /  |    __)_  |       _/
 |    |   |   |    |  \  |        \ /_____/  /        \ |        \ |    |   \ \     /   |        \ |    |   \
 |____|   |___|____|__ \/_______  /         /_______  //_______  / |____|_  /  \___/   /_______  / |____|_  /
                      \/        \/                  \/         \/         \/                   \/         \/ 
 
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
