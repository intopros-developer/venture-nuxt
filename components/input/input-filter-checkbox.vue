<template>
    <label :for="id" class="group relative flex cursor-pointer gap-2 text-primary xl:gap-4" :class="{ 'ml-6': isChild }">
        <input :id="id" v-model="checkboxValue" class="form-checkbox cursor-pointer focus:!shadow-none focus:ring-transparent" style="position: inherit" type="checkbox" />
        <span class="absolute hidden h-5 w-5 rounded-[1px] border border-primary bg-transparent group-hover:inline-block"></span>
        <span class="cursor-pointer text-base text-black-700 group-hover:text-primary">{{ label }}</span>
    </label>
</template>

<script>
    export default {
        props: {
            id: {
                type: String,
                default: '',
            },
            value: {
                type: Boolean,
                default: false,
            },
            label: {
                type: String,
                default: '',
            },
            isChild: {
                type: Boolean,
                default: false,
            },
        },

        computed: {
            checkboxValue: {
                get() {
                    return this.value;
                },

                set(val) {
                    this.$emit('input', val);
                },
            },
        },
    };
</script>
