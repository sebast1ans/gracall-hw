export default {
    methods: {
    formattedDate(timestamp) {
                    return `${
                        new Date(timestamp).toLocaleDateString(
                            'en',
                            {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            }
                        )
                    }`
                }
    }
}