const pages=[...document.querySelectorAll('.page')];
function showPage(id){
  pages.forEach(p=>p.classList.toggle('active',p.id===id));
  window.scrollTo({top:0,behavior:'smooth'});
  document.getElementById('nav').classList.remove('open');
  history.replaceState(null,'','#'+id);
}
function toggleMenu(){document.getElementById('nav').classList.toggle('open')}
function toast(message){
  const el=document.getElementById('toast'); el.textContent=message; el.classList.add('show');
  clearTimeout(window.__toast); window.__toast=setTimeout(()=>el.classList.remove('show'),2800);
}
function joinRoom(){
  const code=document.getElementById('roomCode').value.trim();
  if(!code){toast('Digite o código da sala.');return}
  toast('Código recebido: '+code+'. A validação será conectada ao servidor na próxima etapa.');
}
const initial=location.hash.replace('#','');
if(initial && document.getElementById(initial)) showPage(initial);
