package main

import (
	"net/http"

	"github.com/gorilla/sessions"
	"github.com/labstack/echo-contrib/session"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func sessionRouter() *echo.Echo {
	e := echo.New()
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowCredentials: true,
		AllowOrigins:     []string{"http://localhost:8080"},
	}))
	store := sessions.NewCookieStore([]byte("secret"))
	e.Use(session.Middleware(store))

	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, cookie world.")
	})

	e.POST("/signin", func(c echo.Context) error {
		type User struct {
			Username string `json:"username"`
		}
		user := new(User)
		c.Bind(user)

		sess, _ := session.Get("session", c)
		sess.Values["username"] = user.Username
		sess.Save(c.Request(), c.Response())
		return c.NoContent(http.StatusOK)
	})

	e.GET("/user", func(c echo.Context) error {
		sess, _ := session.Get("session", c)
		username := sess.Values["username"]
		switch username.(type) {
		case string:
			return c.String(http.StatusOK, username.(string))
		default:
			return echo.ErrUnauthorized
		}
	})

	return e
}

func main() {
	e := sessionRouter()
	e.Logger.Fatal(e.Start(":1323"))
}
