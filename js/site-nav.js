//Shared site navigation. Edit SITE_NAV_ITEMS to add/reorder/remove pages.
(function () {
    var SITE_NAV_ITEMS = [
        { id: 'appendix', num: '01.', label: 'Appendix', href: 'index.html#appendix' },
        { id: 'content', num: '02.', label: 'Content', href: 'content.html' },
    ];

    var activeId = (document.body && document.body.getAttribute('data-nav-active')) || 'appendix';
    var mount = document.getElementById('site-nav-mount');
    if (!mount) return;

    var noJs = document.getElementById('site-nav-nojs');
    if (noJs) {
        noJs.remove();
    }

    var inner = document.createElement('div');
    inner.className = 'site-nav-inner';

    var nav = document.createElement('nav');
    nav.setAttribute('aria-label', 'Primary');

    var ul = document.createElement('ul');
    ul.className = 'site-nav-list';

    SITE_NAV_ITEMS.forEach(function (item) {
        var li = document.createElement('li');
        var num = document.createElement('span');
        num.className = 'site-nav-num';
        num.textContent = item.num;

        if (item.id === activeId) {
            var current = document.createElement('span');
            current.className = 'site-nav-current';
            current.setAttribute('aria-current', 'page');
            current.appendChild(num);
            current.appendChild(document.createTextNode(item.label));
            li.appendChild(current);
        } else {
            var a = document.createElement('a');
            a.href = item.href;
            a.appendChild(num);
            a.appendChild(document.createTextNode(item.label));
            li.appendChild(a);
        }
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    inner.appendChild(nav);
    mount.appendChild(inner);
})();
