const apiKey = '16241946-e1ddd5a0e4c82215e760a7728';

export default {
  searchQuery: '',
  page: 1,

  fetchImages() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;

    return fetch(url)
      .then(res => res.json())
      .then(({ hits }) => {
        this.page += 1;
        return hits;
      });
  },

  resetPage() {
    this.page = 1;
  },

  set query(value) {
    this.searchQuery = value;
  },
};
