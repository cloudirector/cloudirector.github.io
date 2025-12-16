import('/assets/js/index-WzJIjsVk.js').then(m => module = m); 
(async () => {
  const response = await fetch(
    "https://vewgupkalpbijaljalkm.supabase.co/rest/v1/games?select=*&id=eq." + location.pathname.split("/").pop(),
    {
      headers: {
        apikey: module.s["supabaseKey"],
        accept: "application/vnd.pgrst.object+json"
      }
    }
  );

  const data = await response.json();
  window.open(data.gofilelink);
})();
