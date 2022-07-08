<template>
    <component :is="'DefaultField'" :field="field" :errors="errors" :show-help-text="showHelpText">
        <template #field>
            <input
                :id="field.name"
                type="text"
                class="w-full form-control form-input form-input-bordered"
                :disabled="isReadonly"
                :dusk="field.attribute"
                v-model="value"
                v-bind="extraAttributes"
            />

            <p v-if="hasError" class="my-2 text-danger">
                {{ firstError }}
            </p>
        </template>
    </component>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'

export default {
    mixins: [FormField, HandlesValidationErrors],

    props: ['resourceName', 'resourceId', 'field'],

    methods: {
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
          this.value = this.field.value || ''
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
          formData.append(this.field.attribute, this.value || '')
        },

        /**
         * Update the field's internal value.
         */
        handleChange(value) {
          this.value = value
        }
    },

    computed: {
        defaultAttributes() {
            return {
                placeholder: this.field.placeholder || this.field.name,
            }
        },

        extraAttributes() {
            const attrs = this.field.extraAttributes

            return {
                ...this.defaultAttributes,
                ...attrs,
            }
        },

        hasError() {
            return this.validationErrors.has(this.field.attribute)
        },

        firstError() {
            if (this.hasError) {
                return this.validationErrors.first(this.field.attribute)
            }
        }
    },
}
</script>
