 // Vue App
    const app = Vue.createApp({
      data() {
        return {
          items: [
            {
              id: 1,
              title: 'First Card',
              text: 'This is the first card description.',
              image: 'https://via.placeholder.com/150',
              link: '#'
            },
            {
              id: 2,
              title: 'Second Card',
              text: 'This is the second card description.',
              image: 'https://via.placeholder.com/150',
              link: '#'
            },
            {
              id: 3,
              title: 'Third Card',
              text: 'This is the third card description.',
              image: 'https://via.placeholder.com/150',
              link: '#'
            }
          ]
        };
      }
    });

    // Card Component
    app.component('card-component', {
      props: ['title', 'text', 'image', 'link'],
      template: `
        <div class="col-md-4">
          <div class="card h-100">
            <img :src="image" class="card-img-top" alt="Card Image">
            <div class="card-body">
              <h5 class="card-title">{{ title }}</h5>
              <p class="card-text">{{ text }}</p>
              <a :href="link" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      `
    });

    app.mount('#app');
