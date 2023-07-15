// Observar se algum botão foi clicado
document.addEventListener('click', (e) => {
  const listOptions = e.target.parentElement;

  // Adicionando e removendo classes
  if (listOptions.classList.contains('list_options')) {
    const buttons = Array.from(listOptions.children);

    buttons.forEach((button) => {
      button.classList.contains('active') && button.classList.remove('active');
    });

    e.target.classList.add('active');
  }
});
