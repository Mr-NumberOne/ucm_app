from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in ucm_app/__init__.py
from ucm_app import __version__ as version

setup(
	name="ucm_app",
	version=version,
	description="d",
	author="d",
	author_email="d@d.d",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)