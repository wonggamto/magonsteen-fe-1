import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export const App = defineComponent({
    setup(){
      return ()=><>
        <header>
          <ul>
            <li>
              <router-link to='/bar'>Bar</router-link>
            </li>
            <li>
              <router-link to='/Foo'>Foo</router-link>
            </li>
          </ul>
        </header>
        <div>
          <RouterView/> 
        </div>  
      </>
    }
})