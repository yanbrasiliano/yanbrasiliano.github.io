<script>
export default {
  data: () => {
    return {
      copyrightDate: new Date().getFullYear(),
      author: 'Yan Penalva',
    };
  },
};
</script>

<template>
  <div class="flex justify-center items-center text-center">
    <div class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light">
      &copy; {{ copyrightDate }}
      <span>
        - Developed by
      </span>
      <a href="https://www.linkedin.com/in/yanbrasiliano/" target="__blank"
        class="font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500">{{
          author
        }}</a>
    </div>
  </div>
  <span>v1.0.0</span>
</template>

<style lang="scss" scoped></style>
