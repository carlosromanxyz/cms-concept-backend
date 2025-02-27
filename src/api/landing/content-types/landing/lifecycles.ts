export default {
  async beforeCreate(event: any) {
    const { data } = event.params;
    console.log("🔥 beforeCreate ejecutado con data:", data); // <-- Agregado

    if (data.title) {
      data.slug = data.title
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');
    }
  },

  async beforeUpdate(event: any) {
    const { data } = event.params;
    console.log("🔥 beforeUpdate ejecutado con data:", data); // <-- Agregado

    if (data.title && !data.slug) {
      data.slug = data.title
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');
    }
  }
};
