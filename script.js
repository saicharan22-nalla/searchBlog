const blogs = [
    { title: 'Understanding JavaScript Closures', category: 'tech', date: '2024-12-01' },
    { title: 'Healthy Lifestyle Tips', category: 'lifestyle', date: '2024-11-28' },
    { title: 'The Future of AI', category: 'tech', date: '2024-12-05' },
    { title: 'Educational Apps to Watch', category: 'education', date: '2024-10-15' },
];

function performSearch() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const sortFilter = document.getElementById('sortFilter').value;
    const categoryFilter = document.getElementById('categoryFilter').value;

    let filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery) &&
        (categoryFilter === 'all' || blog.category === categoryFilter)
    );

    if (sortFilter === 'date') {
        filteredBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    displayResults(filteredBlogs);
}

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
        return;
    }

    results.forEach(blog => {
        const item = document.createElement('div');
        item.className = 'result-item';
        item.innerHTML = `<strong>${blog.title}</strong><br><small>${blog.date} | ${blog.category}</small>`;
        resultsContainer.appendChild(item);
    });
}