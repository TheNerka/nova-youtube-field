import IndexField from './components/IndexField.vue';
import DetailField from './components/DetailField.vue';
import FormField from './components/FormField.vue';


Nova.booting((app, store) => {
    app.component('index-nova-youtube-field', IndexField);
    app.component('detail-nova-youtube-field', DetailField);
    app.component('form-nova-youtube-field', FormField);
})
