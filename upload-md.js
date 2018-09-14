var uploadMd={};
(function(){
    var loading='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAeE0lEQVR4Xu1da5RdRZXe+/QjROggSALMEpIAYobXgBM1rnT3vfuEyAwOGsSJqDOS+EaMgvggDIogAj4YwsNBxlFgZnwQH4AiI5JU3e6EFtdkDUEIoqIE8BUShCQOJN333j1rh3MzndiPc+rUed6qtbLyo6t27frqfLdqV+29C8GVTBHQWi8BgAoAVAFgVqDMRgCoyT8iuiVTBdu8c2zz8Wc2fK31iQBw2yhSjKeLkOV0IlqfmbJt3LEjSAaTH5BDA8CLQ3b/LACQI0lItCxWcwSxCGYYUVprIcVjEcjREiskmU1E8r8rKSHgCJIS0K1utNafAoCLDbu9hIikvSspIeAIkhLQrW6UUhsRcaZhtxuJaLZhW9fMAAFHEAPQTJsEtsf9pu2Ddic5WyQmghGaO4JEACtuVa21HOWKcR6niLEuR8CupICAI0gKII+yPxxBUsTbRleOIDZQDCnDrSAhgcpRNUeQFCfDESRFsC115QhiCcgwYhxBwqCUrzqlIcjdd9+975QpU97BzK9i5pch4rHM/HNEvN3zvFsrlcovs4a+bATRWs9i5pmIKLYVMHMNER8nInGPKUUpBUFqtdrpzPwVADhgglm5uaen55y5c+c+l9XMlYUgWutFwWWn+JONVcRvTC41b88Ka1v9Fp4gtVrt7GazeT0ieiFAub9er9PChQu3hqhrvUrRCRK4ydwEAEKQMKXwN/+FJojW+kMAsCLMTLXqMPMQEfUhYjNKOxt1S0AQucPZtZ2KUJYS0c0R6ueqamEJMjQ0dOCOHTueQMR9DRD9BBFdZtAuVpMiE0RrLT9E8oMUtRTaybKwBNFai8OfkeMeM+/s7u4+ure394mosx2nflEJIsZ44IFsOvzziCjSSm/ake12RSbITwHg+BiA3EZEb4zRPnLTAhPEZGs1Gp/1RHRSZMBy0KCQBFm5cmXHQQcdtBMRO+Jg6HlepVKpDMaREaVtEQkSnFhJ5GOsQkSF/NYKqfTg4OChjUbjd7Fm7IVz+4e3bNlywuLFixtxZYVpX1CCSHBXK1Y+zDDHrOMIYgxd9IZa60MA4PfRW47ZYhkRXW9J1oRiikaQmMFde2DhCJLGFxb0YWuLFYh7prOz88i+vr5nkh5CkQgSIzTYrSBJf0hh5Cul1iPiX4WpO1kdZr7B9/33T1Yv7t8LRhC5uzgr7pilPTM/4Pv+eLfuNrpITEYhbRBBI84x7xhockdHx3H9/f0PJ4b0CzoXIh7EUuTjaCjdMW+SH9ZYsgcHB6fX63WJ736Rjb6ZedD3fUngllgpEEHiHuvuxpCZtyLirKJmYynsCiIzUKvVljPz5ba+aERcXK1Wv2VL3t5yikCQINOj+FvZKoX2xyo0QdatW9e1bdu2RxHxcBuzycxP7Nix4+hTTz11pw15RSNIYJhLUonYx7qB7fG47/tWZCUxH2FkFpogMkCl1BmI+O0wgw1Th5kv9n3/0jB1o9bJ+wpi81g3wEZSphba5b3wBAlIMoCI/VE/2LHqi59WZ2fn7P7+flv3LLu7yTNBAn8rWT3CpkOdEG5mHvB9P6rnr40ptCqjFAQZHBw8ptFoPAQAtsZzKxGdaRXpnJ9iaa2tHesGuEma1MJHFtr6oGx/S5HlKaVuRMT3RG44TgNmnuf7/k9syRM5eV1BLOk1GqpriOhcm9hlJas0BJFj30aj8SsA6LEE5vpqtfoKRGRL8vJMENlaWbnIK/qx7t5zXRqCBL/Q5wPAF2x90ADwPiK60ZY8S7/UVjMrJnCsW9hLwbHmuVQEkWPf7du3y234UZY+6me6urpm9vb2brchL28Ese1vxcyFP9Yt9Qoig6vVaqcx8/dsfNCBDGv76eCDjOsUeYCtW+kEjnWtrm4W59BYVKlWkBYKSimbx74NRJxDRI8aozyqYRwnS5tOfxbCaPeG4w4iCpvtxAaUqcgoJUHk2Lder/80bsThqBm4h4hea2NGYu75rWUI0VpLlKDND7oUx7ql32K1Bqi1vg4APmDjoxYZchFZrVbX2JCnlJIMhJEcI21evCXgrVtof6uJ5rSUK4gMeM2aNQfU63U59p0o22KU7/16IloWpcF4dcUWCdJ0hopnka2VpPe0aHuYpvD5syGV7Vi3bVaQwGBfxszX2vioAeA+InqNJVm7xIiRzMznIuL+Y8kNPr4Vtt8lNFnBJhi3tW2fTWxtySrtCiIASWju9OnTH7Fx7MvMT/m+f7At4EdtBcX3SXyW5KKu5fkqLhqS37Zma9UYrbfWWk7SYvtc2Tw0sI2rLXmlJkiwiixk5h9ZAOwZIjrQgpzMRWitbXkHlO5Yt622WKN+pe8EgNfF/DJ/SURHx5SRi+ZKqWfH29ZFUPAWIloSoX4hq5Z+BQn2+nKzLjfsXaazxMwrfd9/s2n7PLWLa4MEttGJZfDWnWxe2oIgAoJS6ipE/PBkgIz396TDcU31MmmntRZP26tN2gZtcnOsy8yeUmq253kvA4BjAeDnzz///D22okJjE2Tt2rU99Xr9TGY+AwBOAIBDAxB/AwByPHnHPvvsc+u8efO2xZiQ2E1Fz5GRkV8AgCSdi1QkA6OkGCKieqSGOa0cHDNLwosxT88mUlv8rRBRVg/J2p5ZCebzHACQH73poxVh5v8FgDsA4FLf938eR8lYBNFan8XM8sv8kklA3QQAFxLRTTbdx6MOXCn1cgAQN5Qop1F/AAAxRuU0rDTFxA8r2FrJfYycsGVSmBkHBgaWNJvNKxFxxiRK7GDmd/q+/3VTZY0JorW+EgA+HqVjORYEgPfaDkSKosPAwMDsZrO5EgDmTtZOHttBxDcTkayGpStRogiDlWNRluRQSr0aACQwLtQFazBhcmL3j0T0NZMJNCKIBY/ZbwLAR7P68ORXqFarncPMF42zmjzGzJfJy0hZvERlMpGmbUKuJNfIWyxZbasGBgYOazQan0XEt5iMk5kbnuctrFarku8rUolMkODjehwADovU059Xfh4APgcAVxLRjpiyjJrfddddU6ZOnbqEmf8aAOS11i5mXtfd3f1pWzEgRoql3Cjw7D2XmXdHFSKi2Bg1ALg5K2IMDQ1N3blz58cA4AIA2CcmLJKE4/CodmRkgiilTkXEH8RUdnTzJwHgY0Qkq4orDoFdCGitJWnG5wHgpRYhWUJEt0SRF5kgWusbJBQ1Sidh6jKzJEgQ+0TsFFfaFAGllNgXYmeIvWG1MPNXfd9/ZxShJgT5MQDMi9JJ2LrM3ERESXt5ARFtCdvO1Ss+AqtWrTrY87zLEXGpxfRNewMT2eE0MkGUUusQUfbsiRVm3uZ53mX77bffirlz544k1pETnDkCGzZs6N60aZNcXH7S8MXiKGNYR0SvjNIgMkG01jb8msLq+Cgzn+/7vs0Y87B9u3oJI6CUer3c6CPiEQl31RL/HSJ6U5S+TAgiJwpXROnEQt3VEh1Ytss6C7gUUoTWeg4zfylqVKWFwS4nIrm/C11MCHIIM/8WEb3QvdipWJeXoBqNxicWLly41Y5IJyVNBIaGhg7cuXPnJcx8tsV8AWGHUG80Gi89+eSTxasjdIlMEJGslLoWEa2En4bWNKjIzE/LfnXLli03pvU6bVQdXf09EQgC186Wy1cT/y8beDLzp33f/2RUWUYEEUex4eHh+xHxyKgdWqz/kOd5b61UKg9alOlEWUZgYGDg+Eaj8Q1EFE/brMoPqtXq6028IowIIqOU6/9mszlo67EVE+SYedjzvDdVq9Xvm7R3bZJFoFarncfMn40Th2NBwx/OmDHjDccee+ywiSxjgkhn991337TnnnvuOkR8u0nnltrs8DzvFZVK5WeW5DkxFhBQSn0QEcWHK8ty4+bNm8+JsxWPRZDWyA29LG0CdzsRnW5ToJNljoDWWmJufg0AU82lmLe06TVuhSAyFInskqyBiChL6kHmwzNuOd3dvhtjZ7Wh1voyAPgnq0JDCGNm63FH1gjS0j/YdokbudyOGseAh8BjjypBYMxXo7Zz9e0joJT6VYqXf/LjLPbFipGRkUtPOeUUiSa0VqwTpKWZ1vqoINpQbksTL6bHeIkr1mYd3H333ft2d3f/Ka1hSyb/rq6u8/r6+mRLZ70kRpCWpkqpBYh4PQDMsa79KIHyXrrv+6kv60mOqYiy16xZc0SQ8jVp9R9h5vf5vj+QZEeJE0SU11p3iot8whdFy4hIiOhKhgiIV25HR4fE8SdSmPmPiHjx5s2bb4hzOhVWuVQI0lImcDW4VJifgKvB8UQkL926kjECSqlNIRIqRNJSwmYR8YZ6vX5Rmq5GqRKkhUgCzmr3E9ErIiHuKieGgNb6ywDwLosdZOasmglBRhFlETOvQMSZMcE8jYjEDd+VHCCwdu3aw4eHh3+JiN1x1GFmeb5Cwh0kx1UmJVOCyIiDxAmSMOAThgEzPyOiYzJBz3U6LgJaa0nT+g3D6MDtYq9Omzbt6qwD5jInyKjVRNzoJeRSEiKH1etZZu71fX+D+1bzh0CtVju72WzKDiHUSiIh15JFZcqUKcvnz5//VB5GFPZDTE1XpZSE835xsqB9edKgq6trWV9fn6QTdSWnCAwMDLys2WzKBW7vRCrmNWlH7ggyakV5GzMvb7lJM/NORJSEEZKr6QdEtC6n34RTawwEVq9e7XueJ3l0j2Xmw1qnmMy8ARGvMM18mDTYuSVI0gN38h0CYRBwBAmDkqvTtgg4grTt1LuBh0HAESQMSq5O2yLgCNK2U+8GHgYBR5AwKLk6bYuAI0jbTr0beBgEHEHCoOTqtC0CjiBtO/Vu4GEQcAQJg5Kr07YIOIK07dS7gYdBwBEkDEquTtsi4AjStlPvBh4GAUeQMCi5Om2LgCNI2069G3gYBBxBwqDk6rQtAuMSRGt9IjPvnyYyiPhAVo/WpzlO19f4CGitX8zM8hR0agURtxLR+rE63IMgohwAfAgAJC58Vmoa7tmRKLoi6oPvGenqurWEgNb6LACQfM4nWhIZVcxGiYcHgGtG/0jvJoisGJIEEQCEJHkoElp7ultR8jAVyekQ/CjfBgDV5HqJJPlZAKDWirKLIDkkR2tE64nopEjDc5ULhYDW+v4MV43xsNpNkhZBHstwSzXZhF5CRJ+arJL7e/EQ0FrLvF6cU803EtFslEdvAOCmnCopagmbZ7utVo5nyEC1YGslP8x52dKPNYqlQhAxTMRAynMRW+T2PCvodIuGgNZ6EQCI7ZHncosQJM/bqxZ4bpuV58/IQLecb69aI9ooBGGD8aXd5BYikq2gKyVBoCA7F3AEKckHV7RhFIYgSqmNFp4fSHp+3BYraYRTll+ELRYzP+6M9JQ/DNfdCwgUyUjP9TEvM29FxFnumLdc1Ap8rmT3kqq/X0QUl+66KMz5NsttryLOalGq53mbJdsr3/dn7XY1YeZa3tjMzA/4vp+V81pRvrNC66mUWo+IqXrvTgZYsGupij/WHs6KeSIJMw8g4iK3tZpsOov992CrdTsiVvIwktHkEH3GcneX9wKXZHWyJasGIoq7u9zwu9ImCIjLEzOfm9VqsuvEClG+Ofn2xL1pV5kwYCoDPxnx3t2tXJt8G26YoxAIfLTS3lY/Gypgys2UQ8AhsCcCLibdfREOgQkQcARxn4dDwBHEfQMOATME3Apihptr1SYIOIK0yUS7YZoh4Ahihptr1SYIOIK0yUS7YZoh4Ahihptr1SYIOIK0yUS7YZoh4Ahihptr1SYIOIK0yUS7YZoh4Ahihptr1SYIOIK0yUS7YZoh4Ahihptr1SYI5J4g995774x6vT6n2WweDQAdAHAHEf2hTebHDTNjBHJLEKXUGxHxIgDY+/kDZuYhRLyOiG7NGD/XfQgEgiCoNwQPM0myagmIkgdr5J+8AyM/emO+8BRCfKJVckcQpZQE8N+IiK+ebOTM/B+I+A4iqk9W1/09GwS01vJimTxzMFkWd0lOfh4RCWlyU3JDkFWrVh3sed7liLh0olDgMZC7rVqtvgkRm7lB1SmyCwGttTyrETWnspBpj2fQsoQzc4Js2LChe9OmTfI23ScRcV8TMBDxwmq1eoVJW9cmGQS01jKnVxtKl7wE5+bhncpMCaKUer2AiIhHGALZajbSbDb/csGCBb+KKcc1t4CA1loegJVnNeIWsU8kcaD8n0nJhCBa6znM/CXLuZD+jYjenQmKrtM9EIi5eoyFpqTjEaKkbp+kSpChoaEDd+7ceQkzn42IcmRrrTDzU77vH2xNoBNkjEBCTxvItmtF2vZJKgRZuXJlx/Tp089m5suSTG/a3d198Pz5858ynlnX0AoCSilJY5tUpkRZReS0K5Un+RIniFJqASJeDwBzrKA/sRB57DP1ZTiFcRWqi4QJ0sJC7BIhSqL3J4kRZPXq1Ud6nncVAMgFUSqlp6dn37lz5z6XSmeuk3ERSIkgrf7FPhGiJJKR0zpB1q5d2zM8PHwRIp4HAF0pfkePEVHc07AU1S1vVxk8a7DLPiGiS2yjao0gzOwFb65fgYgzbCsaQt5niEhcU1zJGAGttbiS3J+BGrK9XmrzWNgKQZRS4hYi7iFZvfPwp0ajcdTJJ5+8KYNJcV2OgUDK26y9NRD7RIgS2x6NRZDgdOqLAPDejL+SDxCR6OFKThDIcBUZjYBsu2Srb1yMCaK13o+Zv4OIrzXuPX7DEUT8ULVavSG+KCfBNgLBllv8sbIscspFpka8EUECQ/w+RDwmw5E/6Hne2yqVyoMZ6uC6ngQBWUmYWV6QmpkhWLcT0ekm/RsRRCl1LSIuM+kwbhtm/iMiXrx58+YbFi9e3Igrz7VPHoEgHkReLpMXpLJ61VZsksivlkUmiNb6EGb+LSJ6yUP7/z0wcwMRb6jX6xctXLhwa5p9u77sIBA4MYq7SGp3Y6M0l9fL9g6+m3RgJgT5OABcOalkuxVWA4AY4o/YFeukZYGA1rrKzCsyOPU8KerNuwlBvg0AZ6QE7KPMfL7v+99LqT/XTYoIBA93ClHS2nadHtWHy4Qg/w0AcxPGcbs4Nk6bNu3quXPnjiTclxOfIQIt+wQALk5BDXGZl4jF0MWEID8GgHmhe4hQkZklbPbmKVOmLHdeuRGAK0FVsU+Y+eYEvYAFpVQIIicBZ9meE2b+iVw4+r7/gG3ZTl5xEAjsEyFKEsfCch8SKTrRZAWRIHyblz9PAsDHiOibxZnG8moqOQKefvrpo0ZGRrYuWLDgt1mNVKISmflTlu2TyOEQkQkiAD711FOPA8AhMcF7HgA+JydiRLQjpiyj5uvWrevatm1bPwAci4gHMvOw53m6UqnIJSgbCS1gI6XUyxHxAmbuA4DZrSP8YFX/LiJ+lYi2pD20wD4Rm0FSB8UqzPyA7/viRBmpRCaISB8YGOhvNpurYrizy2rxUSL6TSRtLVVetWrVSzo6Oj7BzEsRcdoYYh9DxCsqlcpXyp5OqFarvbvZbEp+gHHvtSSc2fO8M6vVqrY0BZHEBLfxctoVJ0ox8vZKlDQiiDRUSr0VAP49Smy5sDiwM8TeyKRorecx852I+JLJFJAMjt3d3X/f29v7u8nqFvHvEeM2JDnfaUT0w6zGqrVeFNyfRLVPjG7RYxEkWEmObzabXweA4yYCjZnFDf1CIropy61LrVZ7DTMPRFz5Hpk6deqr582bty2rDyOJfrXW5wCAhEJHKeIcOr9arcpRf2ZFiB3GbYWZtyLikqh3H6MHZryCtISIy/uMGTMWN5tNiSLc7bwYuIb8DwB8fXh4+MunnHLK/2aGKAAEDpaPGgZzfYWI3pWl/jb7lvSuiLgOADqjypXtVnd391G9vb3bo7a1Wb9lnzDzkr0NeWZ+HBHFpeVmUy/elq6xCTJ60IODg9MbjcbMqVOn/iJvv7hKqasQ8cMmkyT3M8x8dFkS02mtbwOARSZYBG2uIqKPxGhvtWlAll0JsW0ESVldQayONCFhWuujAODhiFurvbWJfMmU0HBiiQ3ieJ6NYjuO0aF4NxxDRI/GUqYAja2uIHkdr9b6TgB4XRz9xGD3fX9+HBl5aDs4OPiqRqNh45DkTiI6LQ9jSlKH0hOkVqstZOYfWQBxCxFNtyAnUxFa678DgO/bUMLzvEqlUhm0ISuvMkpNkCBmXlzkZYsVtzxDRAfGFbJ3e9k/M3MFEWUPLUmfpWxk5vWIOBDXyNy7v1qtRsysbIyDmR/esmXLCWUOXCs1QWq12jJmvtbGxwAATxLR4ZZk7RIT3EPILfF4j8tYz/d0zz337N/Z2WkzydoyIop6XGwTxkRllZYga9asOaBer8tzCAfYQJCZ7/J9P5Yd09IjOHWRW+mwrg+xEg+MsWoNAcBrbOACAM90dnYe2dfX94wlebkSU1qCaK2vkyhEi2h/hIgklWrsYpgzqia+ErE7f2Hl+hsA+C8bskQGM1/n+/4HbcnLk5xSEmRwcPCYer3+05hHmbvnSS49u7q6ju7r6/t13MmLmQrH2GVib72VUgOIKI6asUtwKTynjMe+pSSIzckPvp7YCchaX6FSSoxv0wyURokHxmKA7R8RALiHiLLMkRab6GMJKB1BarXaacxsM4Z9S1dX1xE2XCsC2yPuXv0AWydbSqlrENHm1kicGeXOqTSlVASR+I7t27fLjbmNY93WJP8DEX3NxoxLtJyYADFlGbltj9Wn+KeNjIxIbI+VgwwAeLSnp+eYMuURKBVBtNbnA8AXYn6Ao22Pe33f77UlL28EkXFprd8HANZStwZZaP7ZFmZZyykNQQJHSTnW7bEBamB4HmczF1ceCcLMqLV+yGIa2e2dnZ0zy3LsWxqCKKXk+YX32CBHIMO6x2oeCSJjDSJEJU7GVrmRiGRlKnwpBUHkRKbRaDwUJ0Jyr5n8fU9Pz1G2n3PLK0Fk7EqpWxFxsaUvmjs6Oo7r7+8Xe7DQpRQESeBY9y1JZFnJM0EGBwcPrdfrEos/xcYXzcyDvu/HiSG3oUZsGYUniFLqDESUdKhWCjNbNcxHK5VnggQGu2Q3jJR5cCLQmfkM3/e/a2ViMhJSaIIEaXskjNaWE6EEAp1g0zAvEkHuuuuuKVOnTn0MAA618T0y8xPTpk2TrWph08cWmiC1Wm05M19uYzJFBjN/zvd9yV6fSMn7ChLYIosR8VaLACwnorRfA7CmfmEJIse69Xp9IyK+yBIaiRjmRVpBWrratOmY+bnOzs5Z/f39my3NU6piCksQpdSFiPgZW2jJCU61Wv2WLXljySnCCiJ6J3AqeD0RZfIiWdz5LCxBtNYS6impMm2U1UR0sg1BE8koCkECg11u163cZUhK166urkOKeHlYWIIopXYiYreFj3qks7Nzjg1X9sl0KRJBgoAz8dOy4pkAAH+bZVbGyeZmvL8XkiDyTiIA/N500KPbMfMVvu9faEPWZDKKRJDAYP8gIl4z2bjC/L2oPlqFJMjatWv/YmRkxEZq/id7enrm2L4xH++DKRpBJOnFQQcdJIFnsZ/7ZuaP+74v2fwLVQpJEHmCYdOmTc/HfWk37YusohFEvmSLflpnEpHN4+NUiFZIggRG5IOTJc2eBMFUDPPROhSRIAHWcVOVgud5R1QqFbmELFQpMkHEJcL04cfUDPMyEGTt2rWHj4yMSJrRLsOv21rCCcP+jZsVliCrVq06uKOjYyMA7GMw+vOISLJ/p1qKuoIEq8i5AHC1AWAjzPzKor49WViCBJN2AQBcEWXSmPlffd9/b5Q2tuoWmSCCgUnMDSK+o1qt2nzT0tZ0hJJTaIIEJPkyAIR5u+NPALC8Wq1+MatHfIpOEIk+rNVq72fmzyLivpN8YczMH/B9/19CfYk5rVR4ggQkeScAfH6c5AOyDftPAJAot0zeRGzNfdEJ0hrHwMDAYY1GQx5MWjqOXSKZW95ehgwnpSCITNy6detetH37dknHP0ciCxFxk+d5A3mKaisLQVpEkfuoer0uT0LMYmZZUeRl4Ed6enq+n9bdUtILT2kIkjRQNuSXjSA2MMm7DEeQFGfIESRFsC115QhiCcgwYhxBwqCUrzqOICnOhyNIimBb6soRxBKQYcQ4goRBKV91HEFSnA+ttTyYc3/MLk8iInlQx5UUEHAESQHk0V0opSSOfqZJt8z8uO/7rXcMTUS4NhERcASJCFjc6sG7hKZOlqV4qz0uhmm2dwRJE+0XsqnLq7ayiuwfpWtm3oqIs2y9DRKl73au6wiSweyLLcLMtbAkCchRdbZH+pPlCJI+5rt6DEhy+2T2iNgdiLjIkSObiXIEyQb33b0Gj3pWmbnaIktAihoASKDRzRmr2Nbd/x+p1u4Qr3GWMwAAAABJRU5ErkJggg==';
    var html="<div class='container-loading'>";
    html+='<img src="'+loading+'" class="loading"/>';
    uploadMd.loadingWait={
        show:function(pel){
            var $el=$(pel);
            $el.append(html);
            $el.addClass('container-loading-parent');
        },
        hide:function(pel){
            var $el=$(pel);
            $el.find('.container-loading').remove();
            $el.removeClass('container-loading-parent');
        }
    };
    var imgUpload={
        count:0,
        getUploadBtn:function(id){
            return '<div class="img-add-btn"><input type="file" id="'+id+'" style="display:none" accept="image/*"></div>'
        },
        getBigPreviewConfig:function(src){
            return '<div class="img-view-big">'+
                '<div class="img-view-big-backdrop"></div>'+
                '<div class="img-view-big-content">'+
                '<img src="'+src+'">'+
                '</div></div>';
        },
        getPreviewConfig:function(imgSrc,isUpload){
            var html='<div class="img-view" style="background-image:url('+imgSrc+');" data-src="'+imgSrc+'"/><div class="img-view-action">';
            if(!isUpload){
                html+='<div class="img-view-upload"></div>';
            }
            html+='<div class="img-view-del"></div></div></div>';
            return html;
        },
        getPreviewConfigList:function(imgSrcList){
            var html=[];
            for(var i=0;i<imgSrcList.length;i++){
                html.push('<div class="img-view-container" data-url="'+imgSrcList[i]+'">'+this.getPreviewConfig(imgSrcList[i],true)+'</div>');
            }
            return html.join('');
        },
        createNewUploadContainer:function($container,prive){
            this.count++;
            var id='img-add'+new Date().getTime()+this.count;
            var uploadContainer=this.getUploadBtn(id);
            $container.append(uploadContainer);
            var $upload=$('#'+id);
            var $imgAddContainer=$upload.parents('.img-add-btn');

            $upload.click(function(event){
                event.stopPropagation(); //阻止click事件冒泡
            });
            $imgAddContainer.click(function(){
                if(prive.nowCount<prive.max){
                    $upload.click();
                }else{
                    alert('最多只允许上传'+prive.max+'张图片');
                }
            });
        },
        uploadContainerToPreviewContainer:function($uploadBtn){
            var id=$uploadBtn.attr("id");
            $parent=$uploadBtn.parent();
            $parent.removeClass('img-add-btn');
            $parent.unbind(); //解绑所有事件
            $parent.addClass('img-view-container');
            //显示小预览
            var selectedFile = $uploadBtn[0].files[0];
            var reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onload = function(){
                $parent.append(imgUpload.getPreviewConfig(this.result));
            };
        },
        resetContainer:function(urlList,prive){
            prive.nowCount=0;
            var $container=$(prive.container);
            var html='';
            prive.nowCount=urlList.length;
            if(urlList&&urlList.length>0){
                html+=this.getPreviewConfigList(urlList);
            }
            $container.html(html);
            this.createNewUploadContainer($container,prive);

        }
    }
    uploadMd.defineImgUpload=function(data){
        var prive={
            nowCount:0,
            url:data.url,
            parameter:data.parameter,
            container:data.container,
            fileInputName:data.fileInputName?data.fileInputName:'file'
        };
        var container=data.container;
        var max=data.max;
        var previewImg=data.previewImg;
        prive.nowCount=previewImg.length;
        if(max){
            prive.max=max;
        }
        var $container=$(container);

        if(previewImg && previewImg.length){
            //显示
            var config=imgUpload.getPreviewConfigList(previewImg);
            $container.append(config);
        }
        //添加选择btn
        imgUpload.createNewUploadContainer($container,prive);
        //绑定change
        $container.on('change','.img-add-btn input[type=file]',function(){
            var $this=$(this);
            var id=$this.attr("id");
            $parent=$this.parent();
            imgUpload.uploadContainerToPreviewContainer($this);
            ++prive.nowCount;
            imgUpload.createNewUploadContainer($container,prive);
        });
        $container.on('click','.img-view-container .img-view-upload',function(){
            //去上传
            event.stopPropagation(); //阻止click事件冒泡
            var $this=$(this);
            var $parent=$this.parents('.img-view-container');
            uploadMd.loadingWait.show($parent); //显示loading
            var $file=$parent.find('input[type=file]');

            var fd = new FormData();
            fd.append(prive.fileInputName,$file[0].files[0]);

            var url=prive.url;
            if(data.parameter){
                var requestData=data.parameter;
                var count=0;
                for(var key in requestData){
                	if(count==0){
                        url+='?'+key+'='+requestData[key]
					}else{
                        url+='&'+key+'='+requestData[key]
					}
                    count++;
                }
            }
            $.ajax({
                url:url,
                type:'POST',
                processData: false,  // 告诉jQuery不要去处理发送的数据
                contentType: false,   // 告诉jQuery不要去设置Content-Type请求头
                cache:false,
                data:fd,
                xhr:function(){
                    return $.ajaxSettings.xhr();
                },
                success:function(datax, textStatus, jqXHR){
                    if((datax&&datax.success)||jqXHR.status==204){
                        $parent.data('url',datax.data);
                        $this.remove();
                        uploadMd.loadingWait.hide($parent); //显示loading
                    }
                }
            });
        });

        $container.on('click','.img-view-container .img-view-del',function(){
            --prive.nowCount;
            //去删除
            $(this).parents('.img-view-container').remove();
            event.stopPropagation(); //阻止click事件冒泡
        });
        $container.on('click','.img-view-container .img-view',function(){
            //显示预览
            var src=$(this).data('src');
            var $bigContainer=$('body .img-view-big');
            if(!$bigContainer.length){
                $('body').append(imgUpload.getBigPreviewConfig(src));
                $bigContainer=$('body .img-view-big');
                $('.img-view-big .img-view-big-backdrop').click(function(){
                    $(this).parents('.img-view-big').hide();
                });
            }else{
                $bigContainer.find('img').attr('src',src);
            }
            $bigContainer.show();
        });

        return {
            getUrlList:function(){
                var $files=$container.find('.img-view-container');
                var urlList=[];
                for(var i=0;i<$files.length;i++){
                    var url=$($files[i]).data('url');
                    if(url){
                        urlList.push(url);
                    }
                }
                return urlList;
            },
            hasUpload:function(){
                var urls=$container.find('.img-view-container').data('url');
                if(prive.nowCount!=this.getUrlList().length){
                    return true;
                }
                return false;
            },
            reset:function(imgList){
                if(!imgList){
                    imgList=[];
                }
                imgUpload.resetContainer(imgList,prive);
            }
        }
    }
})();

