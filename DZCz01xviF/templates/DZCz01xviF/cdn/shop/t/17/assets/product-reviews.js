theme.transformForm=spr=>{const labels=Array.from(spr.querySelectorAll(".spr-form-label")),buttons=Array.from(spr.querySelectorAll(".spr-form-actions .spr-button"));spr.querySelector(".spr-form-contact")?.classList.add("grid","gap-5","md:grid-cols-2"),spr.querySelector(".spr-form-review")?.classList.add("grid","gap-5"),labels.forEach(label=>{label.control&&(label.className="label is-floating",label.control.placeholder=" ",label.control.tagName==="INPUT"?label.control.className="input is-floating":label.control.tagName==="TEXTAREA"&&(label.control.className="textarea is-floating",label.control.rows=5),label.control.insertAdjacentElement("afterend",label))}),buttons.forEach(button=>{button.classList.add("button","button--primary","button--fixed")})},window.SPRCallbacks={onProductLoad:(_event,params)=>{const spr=document.querySelector(`#shopify-product-reviews[data-id="${params.id}"]`),section=spr.closest(".shopify-section--apps");if(!section)return;const headerTemplate=section.querySelector("#shopify-reviews-custom-header");headerTemplate&&(spr.classList.add("custom-spr"),spr.prepend(headerTemplate.content.cloneNode(!0)))},onReviewsLoad:(_event,params)=>{const spr=document.querySelector(`#shopify-product-reviews[data-id="${params.id}"]`);spr.querySelector(".spr-reviews").childElementCount===0&&(spr.querySelector(".spr-form").style.display="block")},onFormLoad:(_event,params)=>{theme.transformForm(document.querySelector(`#shopify-product-reviews[data-id="${params.id}"]`))},onFormSuccess:(_event,params)=>{document.querySelector(`#shopify-product-reviews[data-id="${params.id}"]`).querySelector(".spr-form-message-success").classList.add("alert","alert--success")},onFormFailure:(_event,params)=>{const spr=document.querySelector(`#shopify-product-reviews[data-id="${params.id}"]`);spr.querySelector(".spr-form-message-error").classList.add("alert","alert--error"),theme.transformForm(spr)}};
//# sourceMappingURL=/cdn/shop/t/17/assets/product-reviews.js.map
