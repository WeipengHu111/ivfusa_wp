# 更新日志 / Update Log

## 2024年8月19日更新内容 / August 19, 2024 Updates:

1. 对照设计图针对**所有**组件进行了布局更新。
   - Updated the layout for **all** components according to the design.

2. 对照设计图针对**所有**组件色彩，标志，等做了更新。
   - Updated colors, logos, etc., for **all** components according to the design.

3. 针对设计图对**所有**组件都实现了自适应功能，文字，图片，布局可根据不同屏幕大小响应。
   - Implemented responsive features for **all** components according to the design, with text, images, and layout adjusting to different screen sizes.

4. 解决了在移动端封面组件文字滑动卡顿的问题。
   - Resolved the issue of text scrolling lag in the cover component on mobile devices.

## 2024年7月17日更新内容 / July 17, 2024 Updates:

1. 生成了navbar中博客咨询的新组件（navbar_blog.jsx组件）。
   - Created a new component for blog consultation in the navbar (`navbar_blog.jsx` component).

2. 添加了“展开更多”功能在navbar_blog.jsx组件中。
   - Added a "Load More" feature in the `navbar_blog.jsx` component.

3. 部署添加支持Strapi。
   - Deployed support for Strapi.

## 2024年7月16日更新内容 / July 16, 2024 Updates:

1. 实现了blog组件中，每一个模块根据API ID加载对应文章内容。
   - Implemented loading of corresponding article content in each module of the blog component based on API ID.

2. 实现了给blog里对应文章添加类别标签，做到文章可以在Strapi中定义类别。
   - Added category tags to corresponding articles in the blog, allowing categories to be defined in Strapi.

3. 实现了组件动态加载文章类别（不用固定类别数量了，直接在Strapi上添加文章类别，页面中的类别栏目就会自动增加类别）。
   - Implemented dynamic loading of article categories in the component (no fixed number of categories; categories added in Strapi will automatically appear in the category section on the page).

4. 实现了blog组件中针对不同类别文章的过滤功能。
   - Implemented filtering functionality in the blog component for articles of different categories.

5. blog组件中文章按照更新时间排列。
   - Arranged articles in the blog component by update time.

6. blog组件模块固定数量，实现翻页效果。
   - Fixed the number of modules in the blog component and implemented pagination.
