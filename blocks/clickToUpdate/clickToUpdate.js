export default function decorate(block) {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('mainDiv');
  const rows = [...block.children];

  const leftDiv = (document.createElement('div'));
  leftDiv.classList.add('leftDiv');

  rows.forEach((row) => {
    const leftDivItem = document.createElement('div');
    leftDivItem.classList.add('leftDivItem');
    leftDivItem.textContent = row.children[0].textContent.toUpperCase();
    leftDiv.append(leftDivItem);
  });

  mainDiv.append(leftDiv);
  const resDiv = document.createElement('div');
  resDiv.classList.add('rightDiv');

  const response = document.createElement('div');
  response.classList.add('response');
  resDiv.append(response);

  mainDiv.append(resDiv);

  block.textContent = '';
  block.append(mainDiv);

  leftDiv.addEventListener('click', (e) => {
    response.textContent = `${(e.target.textContent).toLowerCase()} clicked`;
  });
}
