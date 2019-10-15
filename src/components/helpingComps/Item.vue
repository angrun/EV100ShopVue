<template>
  <div>

    <div class="col-xs-12 col-md-4">
      <div class="card center-block">
        <img class="card-img-top img-thumbnail" :src="imageSource" :alt="alt">
        <div class="card-body">
          <div class="col-xs-4 col-md-8 text-left">
            <p>{{itemName}}</p>
          </div>
          <div class="col-xs-8 col-md-4 text-left">
            <p>{{price + '€'}}</p>
          </div>
          <div class="text-left">
            <p>
              <router-link
                :to="{path: 'singleProduct', query: {itemName: itemName, imageSource: imageSource, price: price, description: description, feedbacks: feedbacks}}">
                <a class="btn btn-primary btn-lg card__view-btn"
                   href="#"
                   role="button">View</a></router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Item",
    props: ['imageSource', 'alt', 'itemName', 'price', 'description', 'feedbacks'],
  }
</script>

<style scoped>

</style>
