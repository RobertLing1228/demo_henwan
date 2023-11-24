<template>
  <div
    class="grid w-full h-0.5 mb-20 bg-gray-500/20 rounded-full shadow-md"
  ></div>
  <div class="items-end justify-between mb-8 header">
    <div class="title">
      <p class="text-4xl font-bold text-gray-800">What We Offer</p>
    </div>
  </div>
  <div class="grid grid-cols-1 gap-12 md:px-20 md:grid-cols-2 xl:grid-cols-3">
    <div v-for="service in serviceData" :key="service.title">
      <Service
        :title="service.title"
        :description="service.description"
        :service-icon="service.serviceIcon"
      ></Service>
    </div>
  </div>
  <div class="text-center">
    <NuxtLink
      to="#top"
      class="inline-flex items-center justify-center px-5 py-3 mt-8 text-base font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-md hover:bg-gray-900"
      >Inquires about special arrangement</NuxtLink
    >
  </div>
</template>

<script setup>
const serviceData = [
  {
    title: "Product Sourcing & Procurement",
    description:
      "Henwan specializes in sourcing high-quality snacks from various local and international suppliers.<br><br>We carefully curate our snack collection, ensuring diverse and premium offerings to meet the unique tastes of our customers.",
    serviceIcon: "https://picsum.photos/200/300",
  },
  {
    title: "Wholesale Distribution",
    description:
      "Our core service involves distributing snacks on a wholesale scale to retailers, supermarkets, and other businesses across Malaysia.<br><br>Henwan takes pride in providing a reliable supply chain, ensuring that our partners receive their orders promptly and efficiently.",
    serviceIcon: "https://picsum.photos/200/300",
  },
  {
    title: "Customized Packaging and Branding",
    description:
      "We offer customized packaging solutions to meet the branding needs of our clients.<br><br>Whether it's private labeling or creating unique packaging designs, Henwan works closely with clients to enhance the visual appeal of their products.",
    serviceIcon: "https://picsum.photos/200/300",
  },
  {
    title: "Quality Assurance",
    description:
      "Henwan places a strong emphasis on quality control. We conduct thorough inspections and quality assessments to ensure that our snacks meet the highest standards.<br><br>Our commitment to quality extends to compliance with health and safety regulations, providing assurance to both clients and end consumers.",
    serviceIcon: "https://picsum.photos/200/300",
  },
  {
    title: "Logistics and Supply Chain Management",
    description:
      "Efficient logistics and supply chain management are at the core of our operations. Henwan streamlines the transportation and distribution process, optimizing delivery schedules to meet the demands of our clients.",
    serviceIcon: "https://picsum.photos/200/300",
  },
  {
    title: "Market Research and Trends Analysis",
    description:
      "Henwan stays ahead of market trends and consumer preferences through continuous research and analysis.<br><br>Clients benefit from our insights, helping them make informed decisions on product selection and marketing strategies.",
    serviceIcon: "https://picsum.photos/200/300",
  },
  {
    title: "Client Support and Relationship Management",
    description:
      "We prioritize strong client relationships, offering dedicated support and communication.<br><br>Henwan works collaboratively with clients to understand their business needs, providing tailored solutions for their specific requirements.",
    serviceIcon: "https://picsum.photos/200/300",
  },
  {
    title: "Export and Import Services",
    description:
      "For international clients, Henwan facilitates the export and import of snacks, ensuring a smooth cross-border trading experience.",
    serviceIcon: "https://picsum.photos/200/300",
  },
  {
    title: "Customized Product Development",
    description:
      "We collaborate with clients interested in unique snack offerings, providing assistance in the development of new products tailored to specific market demands.",
    serviceIcon: "https://picsum.photos/200/300",
  },
];
</script>

<style lang="scss" scoped></style>
