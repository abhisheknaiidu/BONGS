<template>
  <div class="card">
    <h3>{{ title }}</h3>

    <img :src="imgUrl" />

    <div class="card__footer">
      <div class="card__meta">
        <p class="price">{{$n(price, "currency")}}</p>

        <p>{{ $d(new Date(addedOn), "short") }}</p>
      </div>

      <p class="likes">{{$tc("card.likes", likes)}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    price: Number,
    imgUrl: String,
    addedOn: String,
    likes: Number
  }
}
</script>

<style scoped>
.card {
  width: 30%;
  margin-bottom: 2rem;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}

h3 {
  margin: 0;
  padding: 0.5em;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

img {
  width: 100%;
}

.card__footer {
  text-align: center;
  margin: 0;
  padding: 0.5em;
}

.card__meta {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

p {
  margin: 0;
  font-size: 14px;
}

.price {
  margin-left: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
}

.likes {
  text-align: end;
  margin-top: 0.5rem;
}
</style>
