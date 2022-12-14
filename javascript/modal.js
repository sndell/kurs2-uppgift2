const toggleModal = () => {
  const modal = document.querySelector('.modal');

  if (modal.classList.contains('hidden')) modal.classList.remove('hidden');
  else modal.classList.add('hidden');
};
