module Jekyll
    class PermalinkRewriter < Generator
        safe true
        priority :low

        def generate(site)
            # ignore if presets like date, pretty, ordinal, or none are being used. Detect the usage by detecting the presence of the colon (:) character in the permalink value
            if site.config['permalink'].include? ":"
                site.posts.docs.each do |item|
                    # copy the permalink value from site config, before we start substituting all the variables in it with their values
                    item.data['permalink'] = site.config['permalink'].dup
                    # go through the list of all custom variables
                    site.config['permalink_custom_vars'].each do |var|
                      # if data isn't available, we will just remove the variable's token from permalink
                      substitution = item.data[var].to_s or ''
                      # and if it is available, substitute it for the value
                      item.data['permalink'].gsub! ":" + var, substitution
                    end
                end
            end
        end
    end
end
