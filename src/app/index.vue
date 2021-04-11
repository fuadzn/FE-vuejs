<template>
  <div class="radio-dis">
    <div class="bg-blue">
      <div class="container">
        <div class="card-4">
          <header class="container blue1">
            <ul class="nav nav-tabs nav-justified">
              <li class="nav-item">
                <a class="nav-link" v-on:click="openCity('London')">
                  {{ steps[0] }}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" v-on:click="openCity('Paris')">
                  {{ steps[1] }}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" v-on:click="openCity('Tokyo')">
                  {{ steps[2] }}
                </a>
              </li>
            </ul>
          </header>

          <div class="container ciity" id="London">
            <div class="col-img">
              <div class="img-chat"></div>
              <div class="container2">
                <p>{{ chats[0].message }}</p>
                <span class="time-right">11:00</span>
              </div>
            </div>

            <div class="container2 darker">
              <p class="right-text">{{ chats[1].message }}</p>
              <span class="time-left">11:01</span>
            </div>

            <div class="col-img">
              <div class="img-chat"></div>
              <div class="container2">
                <p>{{ chats[2].message }}</p>
                <span class="time-right">11:02</span>
              </div>
            </div>

            <div class="container2">
              <div class="row">
                <a href="" class="item1">General Return Poicy</a>
                <a href="" class="item1">Return policy for electronics</a>
                <a href="" class="item1">Return policy for holiday season</a>
                <a href="" class="item2">More on Help Center</a>
              </div>
            </div>
            <div class="col-img">
              <div class="img-chat"></div>
              <div class="container2">
                <p>{{ chats[3].message }}</p>
                <div class="radio-dis">
                  <div class="radio">{{ chats[3].radios[0] }}</div>
                  <div class="radio2">{{ chats[3].radios[1] }}</div>
                </div>
                <span class="time-right">11:02</span>
              </div>
            </div>
            <hr />
            <div class="radio-dis">
              <img
                src="http://assets.stickpng.com/images/584abf102912007028bd9332.png"
                width="40"
                height="40"
              />
              <p>Send Message ...</p>
              <div class="img-right">
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/876/876777.svg?token=exp=1618066772~hmac=5034dbd62e7be32c203ca1cff4f093fb"
                  width="40"
                  height="40"
                />
              </div>
            </div>
          </div>
          <div class="container city" id="Paris" style="display: none">
            <h2>How would you like to <br />contact us ?</h2>
            <span>
              We're committed to finding the answer you need as quickly as
              possible
            </span>
            <div class="radio-dis">
              <div class="card-half">
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/892/892228.svg?token=exp=1618067570~hmac=e31fe5206ad3aa4b983934ac84de1162"
                  width="40"
                  height="40"
                />
                <h3>Open Chat</h3>
                <span
                  >Chat directly with a <br />support agent to resolve <br />you
                  issue</span
                ><br />
                <button class="btn">Chat Now</button>
              </div>
              <div class="card-half">
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/561/561127.svg?token=exp=1618067978~hmac=32e7155fe114a7df37649638f7d652b1"
                  width="40"
                  height="40"
                />
                <h3>Email Support</h3>
                <span
                  >Chat directly with a <br />support agent to resolve <br />you
                  issue</span
                ><br />
                <button class="btn">Email Now</button>
              </div>
            </div>
            <hr />
          </div>
          <div class="container city" id="Tokyo" style="display: none">
            <h2>Do these solution help?</h2>
            <div class="card-review">
              <div class="card-password">
                <h3>How do i reset my password?</h3>
                <hr />
                <p>
                  To reset your password, please visit
                  <a href="" class="item1">this page</a>
                </p>
                <div class="card-oke">
                  <img
                    src="https://www.flaticon.com/svg/vstatic/svg/309/309524.svg?token=exp=1618069110~hmac=cb71128343bd3d8b3afb85bd75cd2108"
                    width="20"
                  />
                  <b class="item1">Solved!</b>
                  <span class="grey">This answer my question</span>
                </div>
              </div>
              <div class="card-password">
                <h3>Ask a lawyer FAQ</h3>
                <hr />
                <p>
                  <b>{{ faqs[0].que }}</b>
                </p>
                <span>
                  {{ faqs[0].ans }}
                </span>
                <p class="grey">Other answers from this article</p>
                <p>
                  <b>{{ faqs[1].que }}</b>
                </p>
                <span>
                  {{ faqs[1].ans }}
                </span>
              </div>
            </div>
            <hr />
            <div class="like-dislike">
              <div class="btn-blue">
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/889/889139.svg?token=exp=1618070237~hmac=9c31b369fe2c20a4011b5692d68198bf"
                  width="30"
                />
                I Still Need Help
              </div>
              <div class="btn-green">
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/309/309524.svg?token=exp=1618069110~hmac=cb71128343bd3d8b3afb85bd75cd2108"
                  width="30"
                />
                Solved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-blue">
      <div class="container">
        <div class="card-4">
          <header class="container blue1">
            <ul class="nav nav-tabs nav-justified">
              <li class="nav-item">
                <a class="nav-link" v-on:click="openCity('London')">
                  {{ steps[0] }}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" v-on:click="openCity('Paris')">
                  {{ steps[1] }}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" v-on:click="openCity('Tokyo')">
                  {{ steps[2] }}
                </a>
              </li>
            </ul>
          </header>
          <div class="container city" id="Paris">
            <h2>How would you like to <br />contact us ?</h2>
            <span>
              We're committed to finding the answer you need as quickly as
              possible
            </span>
            <div class="radio-dis">
              <div class="card-half">
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/892/892228.svg?token=exp=1618067570~hmac=e31fe5206ad3aa4b983934ac84de1162"
                  width="40"
                  height="40"
                />
                <h3>Open Chat</h3>
                <span
                  >Chat directly with a <br />support agent to resolve <br />you
                  issue</span
                ><br />
                <button class="btn">Chat Now</button>
              </div>
              <div class="card-half">
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/561/561127.svg?token=exp=1618067978~hmac=32e7155fe114a7df37649638f7d652b1"
                  width="40"
                  height="40"
                />
                <h3>Email Support</h3>
                <span
                  >Chat directly with a <br />support agent to resolve <br />you
                  issue</span
                ><br />
                <button class="btn">Email Now</button>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-blue">
      <div class="container">
        <div class="card-4">
          <header class="container blue1">
            <ul class="nav nav-tabs nav-justified">
              <li class="nav-item">
                <a
                  class="nav-link"
                  @click.prevent="setActive('ask')"
                  :class="{ active: isActive('ask') }"
                  href="#ask"
                  >{{ steps[0] }}</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  @click.prevent="setActive('review')"
                  :class="{ active: isActive('review') }"
                  href="#review"
                  >{{ steps[1] }}</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  @click.prevent="setActive('complete')"
                  :class="{ active: isActive('complete') }"
                  href="#complete"
                  >{{ steps[2] }}</a
                >
              </li>
            </ul>
          </header>
          <div class="container city" id="Tokyo" >
            <h2>Do these solution help?</h2>
            <div class="card-review">
              <div class="card-password">
                <h3>How do i reset my password?</h3>
                <hr />
                <p>
                  To reset your password, please visit
                  <a href="" class="item1">this page</a>
                </p>
                <div class="card-oke">
                  <img
                    src="https://www.flaticon.com/svg/vstatic/svg/309/309524.svg?token=exp=1618069110~hmac=cb71128343bd3d8b3afb85bd75cd2108"
                    width="20"
                  />
                  <b class="item1">Solved!</b>
                  <span class="grey">This answer my question</span>
                </div>
              </div>
              <div class="card-password">
                <h3>Ask a lawyer FAQ</h3>
                <hr />
                <p>
                  <b>{{ faqs[0].que }}</b>
                </p>
                <span>
                  {{ faqs[0].ans }}
                </span>
                <p class="grey">Other answers from this article</p>
                <p>
                  <b>{{ faqs[1].que }}</b>
                </p>
                <span>
                  {{ faqs[1].ans }}
                </span>
              </div>
            </div>
            <hr />
            <div class="like-dislike">
              <div class="btn-blue">
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/889/889139.svg?token=exp=1618070237~hmac=9c31b369fe2c20a4011b5692d68198bf"
                  width="30"
                />
                I Still Need Help
              </div>
              <div class="btn-green">
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/309/309524.svg?token=exp=1618069110~hmac=cb71128343bd3d8b3afb85bd75cd2108"
                  width="30"
                />
                Solved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllChats, getAllStep, getAllFaq } from "../js/api";

export default {
  name: "index",
  data() {
    return {
      chats: getAllChats(),
      steps: getAllStep(),
      faqs: getAllFaq(),
      image: "camera.png",
    };
  },
  props: ["message"],
  methods: {
    openCity: function (cityName) {
      var i;
      var x = document.getElementsByClassName("city");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      document.getElementById(cityName).style.display = "block";
      // console.log(cityName);
      // alert("asals");
    },
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
  },
};
</script>